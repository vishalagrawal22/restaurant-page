const Path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.ts",
        home: "./src/home.ts",
    },
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jpg/,
                type: "asset/resource",
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