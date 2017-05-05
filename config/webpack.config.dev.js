var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./config');

var webpackConfig = {
    entry: {
        app: path.resolve(config.srcPagePath, 'view/home/index.jsx'),
        admin: path.resolve(config.srcPagePath, 'view/admin/admin.jsx')
    },
    output: {
        path: path.resolve(config.buildPath, 'static/view'),
        filename: '[name].bundle.js',
        publicPath: 'http://127.0.0.1:3000/build/static/view/',
        chunkFilename: '[hash].[name].bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3000
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel',
                include: config.srcPagePath
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, 
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( 'common.js')
    ]
}

for(var i = 0, len = config.HtmlWebpackPluginList.length; i < len; i++) {
    webpackConfig.plugins.push(new HtmlWebpackPlugin(config.HtmlWebpackPluginList[i]));
}

module.exports = webpackConfig;