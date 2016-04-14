var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var config = require("./config");

module.exports= {
  entry: {
    app: path.resolve(config.srcPagePath, 'index.js')
  },
  output: {
    path: config.buildPath,
    filename: 'bundle.js',
    publicPath: "/build/",
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port:3000
  },
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: config.srcPagePath
      }
    ]
  },
  plugins: [
    
  ]
}