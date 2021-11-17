const Path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "bundle.js",
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
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
};