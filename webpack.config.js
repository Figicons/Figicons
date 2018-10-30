const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'figicons.webcomponent': path.join(__dirname, 'src/webcomponent/Figicon.ts'),
    },
    devtool: 'none',
    output: {
        path: path.join(__dirname, 'extract'),
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
