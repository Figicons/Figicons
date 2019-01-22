const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: {
        WebComponent: path.join(__dirname, 'components/FigiconWebComponent.ts'),
        ReactComponent: path.join(__dirname, 'components/FigiconReact.tsx'),
    },
    devtool: 'none',
    output: {
        library: 'Figicons',
        libraryTarget: 'umd',
        path: path.join(__dirname, 'umd'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                loader: ['awesome-typescript-loader'],
            },
        ],
    },

    resolve: {
        modules: [__dirname, path.join(__dirname, 'node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    resolveLoader: {
        modules: [__dirname, path.join(__dirname, 'node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        moduleExtensions: ['awesome-typescript-loader'],
    },
};
