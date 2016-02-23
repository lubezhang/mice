var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);
var distPath = "/dist";
var srcPath = rootPath + "/src/server";
var appPath = rootPath + distPath + '/server';
var staticPath = rootPath + distPath;

var instance = new thinkjs({
  APP_PATH: appPath,
  ROOT_PATH: rootPath,
  RESOURCE_PATH: staticPath,
  env: 'development'
});
 
instance.compile(srcPath, appPath, {retainLines: true, log: true});

instance.run();