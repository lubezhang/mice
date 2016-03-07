import should from "should";
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { reduxPath } from "../test.config";

var actions = require(reduxPath + "/actions");
var ACTION_TYPE = require(reduxPath + "/../common/constants").ACTION_TYPE;

const middlewares = [thunkMiddleware]; // add your middlewares like `redux-thunk`
let mockStore;

before(function() {
  // 在本区块的所有测试用例之前执行
   mockStore = configureStore(middlewares);
   actions.setTest();
});

after(function() {
  // 在本区块的所有测试用例之后执行
   
});

describe('测试后台管理Actions', function() {
  it('检查ACTION_TYPE', function() {
    should.equal("article_list", ACTION_TYPE.ARTICLE_LIST);
    should.equal("article", ACTION_TYPE.ARTICLE);
    should.equal("article_add", ACTION_TYPE.ARTICLE_ADD);
  });

  it('添加、删除文章列表', function(done) {
    should.notEqual(undefined, actions.funcArticleAdd);

    // const getState = { }; 
    // const expectedActions = [{
    //   type: ACTION_TYPE.ARTICLE_DEL,
    //   "article": {
    //     "data": 227,
    //     "errmsg": "",
    //     "errno": 0
    //   },
    //   type: ACTION_TYPE.ARTICLE_DEL
    // }]; 

    // const store = mockStore(getState, expectedActions, done);
    // store.dispatch(actions.funcArticleDel(227)); 
    done()
  });

  it('文章列表', function() {
    should.notEqual(undefined, actions.funcArticleList);

    // 这个用例需要明确知道返回的数据结构，需要在测试前，情况文章的表的数据
    // const getState = { }; 
    // const expectedActions = [{
    //   type: ACTION_TYPE.ARTICLE_LIST,
    //   "articleList": {
    //     "count": 6,
    //     "currentPage": 1,
    //     "data": [{
    //       "id": 166,
    //       "title": "Markdown 简明指南"
    //     }, {
    //       "id": 167,
    //       "title": "sdf"
    //     }, {
    //       "id": 223,
    //       "title": "werwerwer"
    //     }, {
    //       "id": 224,
    //       "title": "markdown Test"
    //     }, {
    //       "id": 225,
    //       "title": "ddddddd"
    //     }, {
    //       "id": 226,
    //       "title": "sdfsfsdfsdf======================="
    //     }],
    //     "numsPerPage": 10,
    //     "totalPages": 1
    //   }
    // }];

    // const store = mockStore(getState, expectedActions, done);
    // store.dispatch(actions.funcArticleList());
  })
})

