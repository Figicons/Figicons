const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');
const FolderManager = require('./FolderManager');

class Packager {
    static async package() {
        config.output.path = path.join(process.cwd(), FolderManager.dirs.componentsDir);

        const compiler = webpack(config);

        return new Promise(resolve => {
            compiler.run((err, stats) => {
                resolve();
            });
        });
    }
}

module.exports = Packager;
