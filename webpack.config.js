const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.(jpg|png)$/,
            use: {loader: 'url-loader'}
        },
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html")}),
    new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/images",
            to: "./images",
          },
        ]
    })]}