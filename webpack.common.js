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
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: "asset/resource",
            use:[
              {
                loader: 'webp-loader?{quality: 13}'
              }
            ]
          }            
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new CleanWebpackPlugin()]

}