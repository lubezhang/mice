'use strict';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./config');
var srcPath = config.srcPath;

module.exports = function (ops){
    var webpackConfig = {
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
            new webpack.optimize.CommonsChunkPlugin( 'common.js')
        ],
        devtool: 'inline-source-map'
    };

    for(var i = 0, len = config.HtmlWebpackPluginList.length; i < len; i++) {
        webpackConfig.plugins.push(new HtmlWebpackPlugin(config.HtmlWebpackPluginList[i]));
    }

    return webpackConfig;
}();