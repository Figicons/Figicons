const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        webcomponent: path.join(__dirname, './components/FigiconWebComponent.ts'),
    },
    devtool: 'none',
    output: {
        path: path.join(__dirname, 'bundle'),
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
