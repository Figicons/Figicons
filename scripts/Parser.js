const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const parse = require('parse5');
const SVGO = require('svgo');
const svgoConfig = require('../configs/svgo.json');
const dir = './icons';

class Parser {
    constructor(
        o = {
            debugMode: false,
        }
    ) {
        this.debugMode = o.debugMode;
        this.svgo = new SVGO(svgoConfig);
    }

    readIcons() {
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

    async cleanIcons() {
        const svgo = this.svgo;
        const filenames = fs.readdirSync(dir);
        const promises = filenames.map(function(filename) {
            return new Promise(resolve => {
                const iconPath = path.join(dir, filename);
                const iconData = fs.readFileSync(iconPath, 'utf-8');
                svgo.optimize(iconData, { path: iconPath }).then(({ data }) => {
                    fs.writeFile(iconPath, data, resolve);
                });
            });
        });

        return Promise.all(promises);
    }

    async parse() {
        const iconData = await this.readIcons();

        console.log('cleaning files');
        await this.cleanIcons();
        console.log('cleaned files');

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
