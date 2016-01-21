var should = require("should");
var thinkjs = require('thinkjs');
var config = require("../../test.config").thinkjs;

before(function() {
  // 在本区块的所有测试用例之前执行
  var instance = new thinkjs(config);
  instance.load();
});


describe('测试后台管理中文章的controller', function() {
  it('检查global.think对象', function() {
    should.notEqual(undefined, global.think);
    should.notEqual(undefined, global.think.controller);
  })

  it('检查文章controller对象', function() {
    var articleCtrl = global.think.controller("article", think.http(), "admin");
    should.notEqual(undefined, articleCtrl.listAction);

    // articleCtrl.listAction()
    //   .then(function(data) {
    //     console.log(data);
    //     done();
    //   })

  })

  // it('获取文章列表', function(done) {
  //   var articleCtrl = think.controller("article", think.http(), "admin");

  //   articleCtrl.listAction()
  //     .then(function(data) {
  //       console.log(data);
  //       done();
  //     })

  // })
})