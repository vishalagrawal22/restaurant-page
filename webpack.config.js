const Path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const yaml = require('yamljs');

module.exports = {
    entry: {
        index: "./src/index.ts",
        home: "./src/home.ts",
        contact: "./src/contact.ts",
        menu: "./src/menu.ts",
    },
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
        }),
    ],
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
};