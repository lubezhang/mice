var srcPath = "./src/page/";

var HtmlWebpackPluginList = [
    {
        template: "admin.html",
        filename: "admin/index_index.html",
        excludeChunks: ['app']
    },
    {
        template: "index.html",
        filename: "home/index_index.html",
        excludeChunks: ['admin']
    },
    {
        template: "detail.html",
        filename: "home/article_detail.html",
        excludeChunks: ['admin']
    },
    {
        template: "about.html",
        filename: "home/about_index.html",
        excludeChunks: ['admin']
    }
];

function genrateHtmlList(htmlConfig){
    var configList = [], config = {};
    for(var i = 0, len = htmlConfig.length; i < len; i++) {
        config = htmlConfig[i];

        var obj = {
            template: srcPath + "view/template/" + config.template,
            filename: "../../../www/view/" + config.filename,
            excludeChunks: config.excludeChunks,
            inject: "body",
            minify: {
                removeComments: false
                // collapseWhitespace:false,
                // keepClosingSlash: true,
                // removeEmptyElements: true
            }
        };

        configList.push(obj);
    }

    return configList;
}


module.exports = {
    srcPath: srcPath,
    HtmlWebpackPluginList: genrateHtmlList(HtmlWebpackPluginList)
}