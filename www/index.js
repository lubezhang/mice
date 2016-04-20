var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);
var distPath = "/build";
var staticPath = rootPath + distPath;

var instance = new thinkjs({
  APP_PATH: rootPath + distPath + '/server',
  ROOT_PATH: rootPath,
  RESOURCE_PATH: staticPath,
  env: 'development'
});

instance.run();