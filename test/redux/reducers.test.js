import should from "should";
import { reduxPath } from "../test.config";
var reducers = require(reduxPath + "/reducers");

before(function() {
  // 在本区块的所有测试用例之前执行

});

describe('测试后台Reducers', function() {
  it('检查Reducers模块是否正常', function() {
    should.notEqual(undefined, reducers);
    should.notEqual(undefined, reducers.default);
  })
  it('检查Reducers的article', function() {

    // console.log(reducers.default({article: 1, articleList: undefined})); 
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