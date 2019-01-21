const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');
const FolderManager = require('./FolderManager');
const Messager = require('./Messager');

class Packager {
    static async package() {
        Messager.startLoading(`🛠  Packaging Components`);

        config.output.path = path.join(process.cwd(), FolderManager.dirs.componentsDir);

        const compiler = webpack(config);

        return new Promise(resolve => {
            compiler.run((err, stats) => {
                Messager.endLoading(`📦  %s Packaged React & Web Components`);
                resolve();
            });
        });
    }
}

module.exports = Packager;
