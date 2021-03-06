var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
 entry: './src/app.jsx',
 output: {
     path: __dirname + '/dist',
     filename: "bundle.js"
 },
 module: {
    loaders: 
    [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(gif|css|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }
    ],
 },
 plugins: [
    new HtmlwebpackPlugin({
        template: __dirname + '/public/app.html', //指定模板路径
        filename: 'app.html', //指定文件名
    }),
    new OpenBrowserPlugin({
        url: 'http://localhost:3000'
    })
 ]
};