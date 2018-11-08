const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        WebComponent: path.join(__dirname, './components/FigiconWebComponent.ts'),
        ReactComponent: path.join(__dirname, './components/FigiconReact.tsx'),
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
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
};
