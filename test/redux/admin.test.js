import should from "should";
import { reduxPath } from "../test.config";

var actions = require(reduxPath + "/actions");
var reducers = require(reduxPath + "/reducers");

before(function() {
  // 在本区块的所有测试用例之前执行
  // console.log(reduxPath);
});

describe('测试后台Redux', function() {
  it('检查Actions的ACTION_TYPE', function() {
    should.equal("article_list", actions.ACTION_TYPE.ARTICLE_LIST)
  })

  it('检查Actions的funcArticleList', function() {
    // actions.funcArticleList();
    should.notEqual(undefined, actions.funcArticleList);
  })
})

describe('测试后台Reducers', function() {
  it('检查Reducers的ACTION_TYPE', function() {
    console.log(typeof reducers);
    console.log(reducers.default({article:{a:1}}));
    // console.log(reducers.default().article({a:1}));
    // for(let key in reducers) {
    //     console.log(key+"===" + reducers[key]);
    // }
    // should.equal("article_list", actions.ACTION_TYPE.ARTICLE_LIST)
  })

  // it('检查Actions的funcArticleList', function() {
  //   // actions.funcArticleList();
  //   should.notEqual(undefined, actions.funcArticleList);
  // })
})