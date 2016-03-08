'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = require('./config');
var srcPath = config.srcPath;
var staticPath = path.join(__dirname, "../dist/static/");

module.exports = function (ops){
    var webpackConfig = {
        entry: {
            app: srcPath + 'view/home/index.jsx',
            admin: srcPath + 'view/admin/admin.jsx'
        },
        output: {
            path: path.join(__dirname, "../dist/static/view/"),
            publicPath: "/static/view/",
            filename: '[name].[chunkhash].js',
            chunkFilename: '[hash].[name].bundle.js'
        },
        resolve: {
          extensions: ['', '.js', '.jsx', '.sass']
        },
        module: {
            loaders: [
                {
                    test: /\.(jsx|js)$/,
                    loader: 'babel?plugins[]=transform-decorators-legacy,presets[]=react,presets[]=es2015',
                    exclude: /node_modules/
                },
                {
                    test:/\.sass$/, 
                    // incldue: path.resolve('www/src/sass'),
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
                },
                {
                    test: /\.(png|jpg)$/, 
                    loader: 'url-loader?limit=8192'
                } 
            ]
        },
        plugins:[
            // new webpack.optimize.DedupePlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin("../css/[name]-[contenthash].css"),
            new webpack.optimize.CommonsChunkPlugin( 'common.[hash].js'),
            new CleanWebpackPlugin(['dist/static'], {
              root: path.join(__dirname, "../"),
              verbose: true, 
              dry: false
            })
        ]
    };

    for(var i = 0, len = config.HtmlWebpackPluginList.length; i < len; i++) {
        webpackConfig.plugins.push(new HtmlWebpackPlugin(config.HtmlWebpackPluginList[i]));
    }

    return webpackConfig;
}();