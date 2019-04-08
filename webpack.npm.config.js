const path = require('path');
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

let buggyFunc = DeclarationBundlerPlugin.prototype.generateCombinedDeclaration;
DeclarationBundlerPlugin.prototype.generateCombinedDeclaration = function(declarationFiles) {
    console.log(declarationFiles);
    for (var fileName in declarationFiles) {
        let declarationFile = declarationFiles[fileName];
        declarationFile._value = declarationFile._value || declarationFile.source();
    }
    return buggyFunc.call(this, declarationFiles);
};

module.exports = {
    mode: 'production',
    entry: {
        react: path.join(__dirname, './src/react/index.tsx'),
        webcomponent: path.join(__dirname, './src/webcomponent/index.ts'),
    },
    devtool: 'none',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                exclude: [/node_modules/, /components/],
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    plugins: [
        new DeclarationBundlerPlugin({
            moduleName: 'some.path.moduleName',
            out: './dist/bundle.d.ts',
        }),
    ],
};
