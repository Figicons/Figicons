const request = require('request');
const fs = require('fs');
const figmaConfig = require('./figmaAPI.json');

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

    const chunkPromises = frameChunks.map(frameChunk => {
        return fetchUrl(`images/${figmaConfig.fileKey}?ids=${frameChunk.join(',')}&format=svg`);
    });

    const res = await Promise.all(chunkPromises);
    let images = {};

    res.filter(e => e.images).forEach(e => {
        images = { ...images, ...e.images };
    });

    parseSVG(images, iconMap);
};

const parseSVG = (images, iconMap) => {
    Object.entries(iconMap).forEach(([key, icon]) => {
        parseIcon(images[key], icon.name);
    });
};

const parseIcon = (url, name) => {
    request.get(url).pipe(fs.createWriteStream(`svgs/${name}.svg`));
};

const fetchUrl = url => {
    const options = {
        url: `https://api.figma.com/v1/${url}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Figma-Token': figmaConfig.token,
        },
    };

    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });
};

try {
    fetchUrl(`files/${figmaConfig.fileKey}`).then(data => {
        const icons = data.document.children[0].children;

        getImages(icons);
    });
} catch (e) {
    console.log('Something went wrong with the request', e, e.message);
}
