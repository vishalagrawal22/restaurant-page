const Path = require("path");

module.exports = {
    entry: "./src/index.js",
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
                test: /\.jpg/,
                type: "asset/resource",
            }
        ],
    },
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
};