const request = require('request');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');

class Packager {
    static async package() {
        const compiler = webpack(config);

        return new Promise(resolve => {
            compiler.run((err, stats) => {
                resolve();
            });
        });
    }
}

module.exports = Packager;
