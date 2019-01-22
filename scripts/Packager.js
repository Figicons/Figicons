const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');
const FolderManager = require('./FolderManager');
const Messager = require('./Messager');

class Packager {
    static async package() {
        return new Promise(resolve => {
            Messager.startLoading(`🛠  Packaging Components`);

            webpack(config, (err, stats) => {
                if (err) {
                    console.error(err.stack || err);
                    if (err.details) {
                        console.error(err.details);
                    }
                    return;
                }

                const info = stats.toJson();

                if (stats.hasErrors()) {
                    console.error(info.errors);
                }

                if (stats.hasWarnings()) {
                    console.warn(info.warnings);
                }
                Messager.endLoading(`📦  %s Packaged React & Web Components`);
                resolve();
            });
        });
    }
}

module.exports = Packager;
