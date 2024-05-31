const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports = {
    entry: "./src/index.js",

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new CleanWebpackPlugin()]
}