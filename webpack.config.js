'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = function (ops){
    var config = {
        // debug: true,
        // entry: {
        //     a: 'webpack-dev-server/client?http://127.0.0.1:3000', 
        //     b: 'webpack/hot/only-dev-server',
        //     app: './www/src/home/index.jsx',
        //     admin: './www/src/admin/admin.jsx'
        // },
        entry: [
            'webpack-dev-server/client?http://127.0.0.1:3000', 
            'webpack/hot/only-dev-server',
            './www/src/home/index.jsx'
        ],
        output: {
            path: path.join(__dirname, "www/static/js"),
            publicPath: "http://127.0.0.1:3000/www/static/js/",
            filename: 'app.bundle.js'
            // ,
            // chunkFilename: '[hash].[name].bundle.js'
        },
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /\.jsx$/,
                    loader: 'react-hot!babel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'react-hot!babel',
                    exclude: /node_modules/
                }
            ]
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin()
            // ,
            // new webpack.optimize.CommonsChunkPlugin( 'common.js')
        ],
        devtool: 'source-map'
    };

    return config;
}();