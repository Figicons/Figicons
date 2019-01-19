const request = require('request');
const fs = require('fs');
const path = require('path');
const Parser = require('./Parser');
const dir = './icons';

function fetch(fileKey, token) {
    const getImages = async icons => {
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
            const prom = fetchUrl(`images/${fileKey}?ids=${frameChunk.join(',')}&format=svg`);
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

        try {
            await Promise.all(fetchIcons(images, iconMap));
            Parser.parse();
        } catch (error) {
            console.log(error);
        }
    };

    const fetchIcons = (images, iconMap) => {
        return Object.entries(iconMap).map(([key, icon]) => {
            const stream = fetchStream(images[key]);

            stream.pipe(fs.createWriteStream(path.join(dir, `${icon.name}.svg`)));

            return streamToPromise(stream);
        });
    };

    const fetchStream = url => {
        return request.get(url);
    };

    function streamToPromise(stream) {
        return new Promise(function(resolve, reject) {
            stream.on('end', resolve);
            stream.on('error', reject);
        });
    }

    const fetchUrl = url => {
        const options = {
            url: `https://api.figma.com/v1/${url}`,
            headers: {
                'Content-Type': 'application/json',
                'X-Figma-Token': token,
            },
        };

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
                        return reject({ code: response.statusCode, message: 'Something went wrong with the request.' });
                }
            });
        });
    };

    try {
        fetchUrl(`files/${fileKey}`)
            .then(data => {
                getImages(data.document.children[0].children);
            })
            .catch(error => {
                console.log(error.code, error.message);
            });
    } catch (e) {
        console.log('Something went wrong with the request', e, e.message);
    }
}

module.exports = fetch;
