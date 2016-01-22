import fetch from "isomorphic-fetch";

let isTest = false;

const ACTION_URL = {
    article_list: "/article/list",
    article_add: "/article/add",
    article_del: "/article/del",
    article: "/article/c"
};

const ACTION_TYPE = {
    ARTICLE_LIST: "article_list",
    ARTICLE: "article",
    ARTICLE_ADD: "article_add",
    ARTICLE_DEL: "article_del"
};

function getUrl(actionType) {
    return (isTest ? "http://127.0.0.1:8360" : "") + "/admin" + ACTION_URL[actionType]
}

function setTest() {
    isTest = true;
}

/**
 * 向后台发起获取数据的请求
 * @param  {[type]} actionType [description]
 * @param  {[type]} params     [description]
 * @return {[type]}            [description]
 */
function fecthPosts(actionType, params){
    let paramList = [];
    for(var key in params){
        paramList.push(key+"="+params[key]);
    }
    return dispatch => {
        fetch(getUrl(actionType), { method: "POST", body:paramList.join("&") })
            .then(response => response.json())
            .then(json => dispatch(receivePosts(actionType, json)));
    };
}

/**
 * 根据actionType组装state
 * @param  {[type]} actionType [description]
 * @param  {[type]} json       [description]
 * @return {[type]}            [description]
 */
function receivePosts(actionType, json){
    var state = {
        type: actionType
    };
    switch(actionType) {
        case ACTION_TYPE.ARTICLE_LIST:
            state.articleList = json.data;
            break;
        case ACTION_TYPE.ARTICLE_ADD:
        case ACTION_TYPE.ARTICLE:
            state.article = json;
            break;

    }
    return state;
}

/**
 * 获取文章列表
 * @return {[type]} [description]
 */
export function funcArticleList() {
    return (dispatch, getState) => {
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE_LIST));
    };
}

/**
 * 保存文章
 * @return {[type]} [description]
 */
export function funcArticleAdd(article){
    return (dispatch, getState) => {
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE_ADD, article));
    };
}

export function funcArticleDel(articleId){
    return (dispatch, getState) => {
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE_DEL, articleId));
    };
}

export {
    ACTION_TYPE,
    setTest
};
