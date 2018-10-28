const path = require('path');
const fs = require('fs');
const parse = require('parse5');

function readFiles() {
    const filenames = fs.readdirSync('./svgs');
    const promises = filenames.map(function(filename) {
        return new Promise(resolve => {
            fs.readFile('./svgs/' + filename, 'utf-8', function(err, content) {
                const fragment = parse.parseFragment(content);
                const inner = parse.serialize(fragment.childNodes[0]).trim();
                console.log(inner);
                resolve({
                    name: path.parse(filename).name,
                    file: filename,
                    content: inner,
                });
            });
        });
    });

    return Promise.all(promises);
}

readFiles().then(data => {
    const figicons = data.reduce((ob, icon) => {
        ob[icon.name] = {
            name: icon.name,
            file: icon.file,
            content: icon.content,
        };

        return ob;
    }, {});

    fs.writeFile('./figicons.json', JSON.stringify(figicons, null, 2), 'utf-8');
    console.log(figicons);
});
