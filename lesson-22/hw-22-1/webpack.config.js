const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: [path.join(__dirname, './src/index.js'), path.join(__dirname, './src/sass/main.scss')]
    },
    mode: "production",
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: "> 0.25%"
                                }
                            ]
                        ]
                    }
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        })
    ],
};