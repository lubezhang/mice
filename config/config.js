var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcPath = "./src/page/";
var HtmlWebpackPluginList = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
        template: srcPath + "view/template/about.html",
        filename: "../../../www/view/home/about_index.html",
        inject: true,
        // chunks: ['app'],
        excludeChunks: ['admin'],
        minify: {
            removeComments: false,
            collapseWhitespace:false,
            keepClosingSlash: true,
            removeEmptyElements: true
        }
    }
];


module.exports = {
    srcPath: srcPath,
    HtmlWebpackPluginList: HtmlWebpackPluginList
}