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
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource"
          }
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new CleanWebpackPlugin()]

}