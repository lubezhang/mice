'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = function (ops){
    var config = {
        // debug: true,
        entry: {
            app: './www/src/home/index.jsx',
            admin: './www/src/admin/admin.jsx'
        },
        output: {
            path: path.join(__dirname, "../www/static/view"),
            filename: '[name].bundle.js',
            chunkFilename: '[hash].[name].bundle.js'
        },
        resolve: {
          extensions: ['', '.js', '.jsx']
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
                }
            ]
        },
        plugins:[
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.CommonsChunkPlugin( 'common.js')
        ]
    };

    return config;
}();