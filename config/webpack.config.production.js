'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = require('./config');
var srcPath = config.srcPath;
var staticPath = path.join(__dirname, "../dist/static/");
var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = function (ops){
    var deps = [
        'react/dist/react.min.js',
        'react-dom/dist/react-dom.min.js',
        "react-bootstrap/dist/react-bootstrap.min.js",
        "react-redux/dist/react-redux.min.js",
        "redux/dist/redux.min.js",
        "react-router/umd/ReactRouter.js",
        "history/umd/History.js"
    ];
    var webpackConfig = {
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
            extensions: ['', '.js', '.jsx', '.scss'],
            alias: {
                // "react":  path.join(nodeModulesPath, "react/dist/react.js"),
                // "react-dom":  path.join(nodeModulesPath, "react-dom/dist/react-dom.js"),
                // "react-bootstrap":  path.join(nodeModulesPath, "react-bootstrap/dist/react-bootstrap.js"),
                // "react-redux":  path.join(nodeModulesPath, "react-redux/dist/react-redux.js"),
                // "react-router":  path.join(nodeModulesPath, "react-router/umd/ReactRouter.js"),
                // "redux":  path.join(nodeModulesPath, "redux/dist/redux.js"),
                // "history":  path.join(nodeModulesPath, "history/umd/History.js")
            }
        },
        module: {
            noParse: [],
            loaders: [
                {
                    test: /\.(jsx)$/,
                    // loader: 'babel?plugins[]=transform-decorators-legacy,presets[]=react,presets[]=es2015',
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015'],
                        plugins: ['transform-decorators-legacy'],
                        cacheDirectory: true
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.(js)$/,
                    // loader: 'babel?plugins[]=transform-decorators-legacy,presets[]=react,presets[]=es2015',
                    loader: 'babel',
                    query: {
                        presets: ['es2015'],
                        cacheDirectory: true
                    },
                    exclude: /node_modules/
                },
                {
                    test:/\.scss$/, 
                    // incldue: path.resolve('www/src/sass'),
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg)$/, 
                    loader: 'url-loader?limit=8192',
                    exclude: /node_modules/
                } 
            ]
        },
        plugins:[
            new webpack.optimize.DedupePlugin({
              'process.env': {
                'NODE_ENV': '"production"'
              }
            }),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin("../css/[name]-[contenthash].css"),
            new webpack.optimize.CommonsChunkPlugin( 'common.[hash].js'),
            new CleanWebpackPlugin(
                [
                    'dist/static',
                    'www/view/admin/*.html',
                    'www/view/home/*_index.html',
                    'www/view/home/*_detail.html'
                ], 
                {
                    root: path.join(__dirname, "../"),
                    verbose: true,
                    dry: false
                }
            )
        ]
    };

    for(var i = 0, len = config.HtmlWebpackPluginList.length; i < len; i++) {
        webpackConfig.plugins.push(new HtmlWebpackPlugin(config.HtmlWebpackPluginList[i]));
    }

    deps.forEach(function(dep) {
        var depPath = dep;
        webpackConfig.resolve.alias[dep.split(path.sep)[0]] = depPath;
        webpackConfig.module.noParse.push(depPath);
    });

    return webpackConfig;
}();