'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var staticPath = path.join(__dirname, "../www/static/");

module.exports = function (ops){
    var config = {
        // debug: true,
        entry: {
            app: './www/src/view/home/index.jsx',
            admin: './www/src/view/admin/admin.jsx'
        },
        output: {
            path: staticPath + "view",
            filename: '[name].bundle.js',
            chunkFilename: '[hash].[name].bundle.js'
        },
        resolve: {
          extensions: ['', '.js', '.jsx', '.less']
        },
        module: {
            loaders: [
                {
                    test: /\.jsx$/,
                    loader: 'babel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                },
                {
                    test:/\.sass$/, 
                    // incldue: path.resolve('www/src/sass'),
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
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
            new webpack.optimize.CommonsChunkPlugin( 'common.js')
        ]
    };

    return config;
}();