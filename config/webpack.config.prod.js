var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./config');
var nodeModulesPath = path.join(__dirname, '../node_modules');

var webpackConfig = {
    entry: {
        app: path.resolve(config.srcPagePath, 'view/home/index.jsx'),
        admin: path.resolve(config.srcPagePath, 'view/admin/admin.jsx')
    },
    output: {
        path: path.resolve(config.buildPath, 'static/view'),
        filename: '[name].[chunkhash].js',
        publicPath: '/static/view/',
        chunkFilename: '[hash].[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        alias: {
            'react':  path.join(nodeModulesPath, 'react/dist/react.min.js'),
            'react-dom':  path.join(nodeModulesPath, 'react-dom/dist/react-dom.min.js'),
            'redux':  path.join(nodeModulesPath, 'redux/dist/redux.min.js')
        }
    },
    module: {
        loaders: [{
            test: /\.(jsx|js)$/,
            loader: 'babel',
            include: config.srcPagePath
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin({
            'process.env': {
                'NODE_ENV': 'production'
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('../css/[name]-[contenthash].css'),
        new webpack.optimize.CommonsChunkPlugin('common.[hash].js'),
    ]
}

for (var i = 0, len = config.HtmlWebpackPluginList.length; i < len; i++) {
    webpackConfig.plugins.push(new HtmlWebpackPlugin(config.HtmlWebpackPluginList[i]));
}

module.exports = webpackConfig;