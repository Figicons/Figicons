const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');
const FolderManager = require('./FolderManager');
const Messager = require('./Messager');

const gulp = require('gulp');
const ts = require('gulp-typescript');

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

    static compile() {
        var tsProject = ts.createProject('tsconfig.json', { outFile: 'output.js' });

        var tsResult = tsProject
            .src() // or tsProject.src()
            .pipe(tsProject());
        console.log(tsResult.js);
        return tsResult.js.pipe(gulp.dest('release'));
    }
}

module.exports = Packager;

Packager.compile();
