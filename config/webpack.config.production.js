'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var srcPath = "./www/src/";
var staticPath = path.join(__dirname, "../dist/static/");

module.exports = function (ops){
    var config = {
        // debug: true,
        entry: {
            app: './www/src/view/home/index.jsx',
            admin: './www/src/view/admin/admin.jsx'
        },
        output: {
            path: path.join(__dirname, "../dist/static/view/"),
            publicPath: "/static/view/",
            filename: '[name].bundle.js',
            chunkFilename: '[hash].[name].bundle.js'
        },
        resolve: {
          extensions: ['', '.js', '.jsx', '.less']
        },
        module: {
            loaders: [
                {
                    test: /\.(jsx|js)$/,
                    loader: 'babel',
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
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin("../css/[name].css"),
            new webpack.optimize.CommonsChunkPlugin( 'common.js'),
            new CleanWebpackPlugin(['dist/static'], {
              root: path.join(__dirname, "../"),
              verbose: true, 
              dry: false
            }),
            new HtmlWebpackPlugin({
                template: srcPath + "view/template/index.html",
                filename: "../../../view/home/index_index.html",
                inject: true,
                // chunks: ['app1', "common.js"],
                excludeChunks: ['admin', 'app.js', "common.js"],
                minify: {
                    removeComments: false,
                    // collapseWhitespace:false,
                    keepClosingSlash: false,
                    // removeEmptyElements: true
                }
            }),
            new HtmlWebpackPlugin({
                template: srcPath + "view/template/admin.html",
                filename: "../../../view/admin/index_index.html",
                inject: true,
                // chunks: ['app1', "common.js"],
                excludeChunks: ['app'],
                minify: {
                    removeComments: false,
                    collapseWhitespace:false,
                    keepClosingSlash: true,
                    removeEmptyElements: true
                }
            })
        ]
    };

    return config;
}();