'use strict';
// var webpack = require('webpack');
var path = require('path');

module.exports = function (ops){
    var config = {
        // debug: true,
        entry: ['./react-redux/index.jsx'],
        output: {
            path: path.join(__dirname, "www/static/js"),
            filename: 'app.js'
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
        }
    };

    return config;
}();