var path = require('path');

var rootPath = path.dirname(__dirname) ;
var distPath = "/dist";
var srcPath = rootPath + "/src/server";
var appPath = rootPath + distPath + '/server';
var staticPath = rootPath + distPath;

exports.thinkjs = {
    APP_PATH: appPath,
    ROOT_PATH: rootPath,
    RUNTIME_PATH: appPath + think.sep + 'runtime',
    RESOURCE_PATH: staticPath,
    env: 'development'
};

exports.reduxPath = "../../src/page/view/admin/redux";