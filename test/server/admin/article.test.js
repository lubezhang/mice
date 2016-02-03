var should = require("should");
var thinkjs = require('thinkjs');
var http = require('http');
var think_config = require("../../test.config").thinkjs;

before(function() {
  // 在本区块的所有测试用例之前执行
  var instance = new thinkjs(think_config);
  instance.load();
});

//get http object
var getHttp = function(options) {

  var req = new http.IncomingMessage();
  req.headers = {
    'x-real-ip': '127.0.0.1',
    'x-forwarded-for': '127.0.0.1',
    'host': '127.0.0.1:8360',
    'x-nginx-proxy': 'true',
    'connection': 'close',
    'cache-control': 'max-age=0',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36',
    'accept-encoding': 'gzip,deflate,sdch',
    'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4,nl;q=0.2,zh-TW;q=0.2'
  };
  req.method = 'GET';
  req.httpVersion = '1.1';
  req.url = '/article/list';
  var res = new http.ServerResponse(req);
  res.write = function() {
    return true;
  }

  return think.http(req, res).then(function(http) {
    if (options) {
      for (var key in options) {
        http[key] = options[key];
      }
    }
    return http;
  })
}


describe('测试后台管理中文章的controller', function() {
  it('检查global.think对象', function() {
    should.notEqual(undefined, global.think);
    should.notEqual(undefined, global.think.controller);
  })

  it('检查文章列表', function(done) {
    getHttp().then(function(http){
      var articleCtrl = global.think.controller("article", http, "admin");
      should.notEqual(undefined, articleCtrl.listAction);

      var articleList = articleCtrl.listAction().then(function(data){
        console.log("articleList = " + JSON.stringify(data));
        done();
      }).catch(function(e){
        console.error("【catch】 = " + e);
        done();
      });
    });

  })
});


describe('测试后台管理中文章的model', function() {
  it('test model', function(done){
    var dbConfig = think.config('db');
    //get model instance
    var instance = think.model('article', dbConfig, 'admin');
    /**
     * instance.xxx().then(function(data){
     *   assert.deepEqual(data, {});
     *   //done();
     * })
     */
    done();
  })
});