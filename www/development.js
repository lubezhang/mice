var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);
var distPath = "/dist";
var staticPath = rootPath + distPath;

var instance = new thinkjs({
  APP_PATH: rootPath + distPath + '/app',
  ROOT_PATH: rootPath,
  RESOURCE_PATH: staticPath,
  env: 'development'
});

instance.compile({retainLines: true, log: true});

instance.run();