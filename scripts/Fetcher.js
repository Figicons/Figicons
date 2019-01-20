const request = require('request');
const fs = require('fs');
const path = require('path');
const Parser = require('./Parser');
const dir = './icons';

const fetchStream = url => {
    return request.get(url);
};

function streamToPromise(stream) {
    return new Promise(function(resolve, reject) {
        stream.on('end', resolve);
        stream.on('error', reject);
    });
}

class Fetcher {
    constructor(o) {
        this.key = o.key;
        this.token = o.token;
    }

    async grabImageData(icons) {
        const perChunk = 24;
        const iconMap = {};
        const frameChunks = icons.reduce((chunks, icon, i) => {
            const chunkIndex = Math.floor(i / perChunk);

            chunks[chunkIndex] = chunks[chunkIndex] || [];
            chunks[chunkIndex].push(icon.id);

            iconMap[icon.id] = {
                id: icon.id,
                name: icon.name,
            };

            return chunks;
        }, []);

        const chunkPromises = frameChunks.map((frameChunk, i) => {
            const prom = this.request(`images/${this.key}?ids=${frameChunk.join(',')}&format=svg`);
            prom.then(() => console.log(`Completed chunk ${i}`));

            return prom;
        });

        const res = await Promise.all(chunkPromises);
        console.log('Fetched all icons from Figma, parsing them...');

        let images = {};

        res.filter(e => e.images).forEach(e => {
            images = { ...images, ...e.images };
        });

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        return Promise.all(this.grabImageFiles(images, iconMap));
    }

    grabImageFiles(images, iconMap) {
        return Object.entries(iconMap).map(([key, icon]) => {
            const stream = fetchStream(images[key]);

            stream.pipe(fs.createWriteStream(path.join(dir, `${icon.name}.svg`)));

            return streamToPromise(stream);
        });
    }

    request(url) {
        const options = {
            url: `https://api.figma.com/v1/${url}`,
            headers: {
                'Content-Type': 'application/json',
                'X-Figma-Token': this.token,
            },
        };

        console.log(options);

        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                switch (response.statusCode) {
                    case 200:
                        return resolve(JSON.parse(body));
                    case 400:
                    case 403:
                        return reject({
                            code: response.statusCode,
                            message: "Error fetching from Figma. Maybe you're unauthorized?",
                        });
                    default:
                        console.log(response);
                        return reject({ code: response.statusCode, message: 'Something went wrong with the request.' });
                }
            });
        });
    }
}

module.exports = Fetcher;
