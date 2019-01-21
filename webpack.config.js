const path = require('path');
const appRoot = require('app-root-path');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: {
        WebComponent: path.join(appRoot.path, 'components/FigiconWebComponent.ts'),
        ReactComponent: path.join(appRoot.path, 'components/FigiconReact.tsx'),
    },
    devtool: 'none',
    output: {
        library: 'Figicons',
        libraryTarget: 'umd',
        path: path.join(appRoot.path, 'umd'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },

    resolve: {
        modules: [path.join(appRoot.path, 'node_modules')],
        extensions: ['.ts', '.tsx', '.js'],
    },

    resolveLoader: {
        modules: [path.join(appRoot.path, 'node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
};
