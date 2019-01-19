const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const parse = require('parse5');
const dir = './icons';

class Parser {
    constructor(
        o = {
            debugMode: false,
        }
    ) {
        this.debugMode = o.debugMode;
    }

    static readIcons() {
        console.log('reading files');

        const filenames = fs.readdirSync(dir);
        const promises = filenames.map(function(filename) {
            return new Promise(resolve => {
                fs.readFile(path.join(dir, filename), 'utf-8', function(err, content) {
                    const $ = cheerio.load(content);
                    const inner = $('svg');

                    inner.find('*').each((i, e) => {
                        $(e).attr('stroke', 'currentColor');
                    });

                    resolve({
                        name: path.parse(filename).name,
                        file: filename,
                        content: inner.html().trim(),
                    });
                });
            });
        });

        return Promise.all(promises);
    }

    static async parse() {
        const iconData = await Parser.readIcons();
        console.log('parsing files');

        const icons = iconData.reduce((ob, icon) => {
            ob[icon.name] = {
                name: icon.name,
                file: icon.file,
                content: icon.content,
            };

            return ob;
        }, {});

        fs.writeFile('./figicons.json', JSON.stringify(icons, null, 2), 'utf-8', () => {
            console.log('Parsing complete.');
        });
    }
}

module.exports = Parser;
