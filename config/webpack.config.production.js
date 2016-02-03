'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var srcPath = "./src/page/";
var staticPath = path.join(__dirname, "../dist/static/");

module.exports = function (ops){
    var config = {
        // debug: true,
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
                    loader: 'babel?presets[]=react,presets[]=es2015',
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
            }),
            new HtmlWebpackPlugin({
                template: srcPath + "view/template/index.html",
                filename: "../../../www/view/home/index_index.html",
                inject: true,
                chunks: ['app'],
                // excludeChunks: ['admin', "common.js"],
                minify: {
                    removeComments: false,
                    // collapseWhitespace:false,
                    keepClosingSlash: false,
                    // removeEmptyElements: true
                }
            }),
            new HtmlWebpackPlugin({
                template: srcPath + "view/template/detail.html",
                filename: "../../../www/view/home/article_detail.html",
                inject: true,
                // chunks: ['app1', "common.js"],
                excludeChunks: ['admin'],
                minify: {
                    removeComments: true,
                    // collapseWhitespace:false,
                    keepClosingSlash: false
                    // removeEmptyElements: true
                }
            }),
            new HtmlWebpackPlugin({
                template: srcPath + "view/template/admin.html",
                filename: "../../../www/view/admin/index_index.html",
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