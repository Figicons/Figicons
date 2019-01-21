const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');
const FolderManager = require('./FolderManager');
const Messager = require('./Messager');

class Packager {
    static async package() {
        Messager.startLoading(`🛠  Packaging Components`);

        config.output.path = path.resolve(process.cwd(), FolderManager.dirs.componentsDir);
        console.log('output path', config.output.path);
        const compiler = webpack(config);

        return new Promise(resolve => {
            compiler.run((err, stats) => {
                console.log('err', err);
                Messager.endLoading(`📦  %s Packaged React & Web Components`);
                resolve();
            });
        });
    }
}

module.exports = Packager;
