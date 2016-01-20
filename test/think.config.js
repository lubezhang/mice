var path = require('path');

var rootPath = path.dirname(__dirname);
var distPath = "/dist";
var srcPath = rootPath + "/src/server";
var appPath = rootPath + distPath + '/server';
var staticPath = rootPath + distPath;

// 在本区块的所有测试用例之前执行


module.exports = {
    APP_PATH: appPath,
    ROOT_PATH: rootPath,
    RESOURCE_PATH: staticPath,
    env: 'development'
};