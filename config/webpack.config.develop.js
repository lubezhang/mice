'use strict';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcPath = "./src/page/";

module.exports = function (ops){
    var config = {
        // debug: true,
        entry: {
            app:[
                'webpack-dev-server/client?http://127.0.0.1:3000', 
                'webpack/hot/only-dev-server',
                srcPath + 'view/home/index.jsx',
            ],
            admin: [
                'webpack-dev-server/client?http://127.0.0.1:3000', 
                'webpack/hot/only-dev-server',
                srcPath + 'view/admin/admin.jsx'
            ]
        },
        output: {
            path: path.join(__dirname, "../dist/static/view"),
            publicPath: "http://127.0.0.1:3000/dist/static/view/",
            filename: '[name].bundle.js',
            chunkFilename: '[hash].[name].bundle.js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.sass']
        },
        module: {
            loaders: [
                {
                    test: /\.(jsx|js)$/,
                    loader: 'react-hot!babel?plugins[]=transform-decorators-legacy,presets[]=react,presets[]=es2015',
                    exclude: /node_modules/
                },
                // {
                //     test: /\.(jsx|js)$/,
                //     loaders: ['react-hot','babel'],
                //     exclude: /node_modules/,
                //     query: {
                //         cacheDirectory: true,
                //         plugins: ['transform-decorators-legacy'],
                //         presets: ['es2015', 'stage-1', 'react']
                        
                //     }
                // }, 
                {
                    test: /\.sass$/,
                    loader: "style-loader!css-loader!sass-loader"
                }, 
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192'
                }
            ]
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin( 'common.js'),
            new HtmlWebpackPlugin({
                template: srcPath + "view/template/index.html",
                filename: "../../../www/view/home/index_index.html",
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
            }),
            new HtmlWebpackPlugin({
                template: srcPath + "view/template/detail.html",
                filename: "../../../www/view/home/article_detail.html",
                inject: true,
                // chunks: ['app'],
                excludeChunks: ['admin'],
                minify: {
                    removeComments: false,
                    collapseWhitespace:false,
                    keepClosingSlash: true,
                    removeEmptyElements: true
                }
            })
        ],
        devtool: 'inline-source-map'
    };

    return config;
}();