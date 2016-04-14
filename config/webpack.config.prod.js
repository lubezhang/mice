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