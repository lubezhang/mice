import fetch from "isomorphic-fetch";

const ACTION_URL = {
    article_list: "/article/list",
    article: "/article/c"
}

const ACTION_TYPE = {
    ARTICLE_LIST: "article_list",
    ARTICLE: "article",
    ARTICLE_ADD: "article_add"
};
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
        fetch(ACTION_URL[actionType], { method: "POST", body:paramList.join("&") })
            .then(response => response.json())
            .then(json => dispatch(receivePosts(actionType, json)))
    }
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
    }
    switch(actionType) {
        case ACTION_TYPE.ARTICLE_LIST:
            state["articleList"] = json.data.data;
            break;
        case ACTION_TYPE.ARTICLE:
            state["article"] = json.data;
            break;

    }
    return state;
}

function articleAdd(article){
    return {type: ACTION_TYPE.ARTICLE_ADD, article};
}

function articleList() {
    return (dispatch, getState) => {
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE_LIST));
    }
}

function article(id) {
    return (dispatch, getState) => {
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE, {id:id}));
    }
}

const ACTION = {
    articleAdd,
    articleList,
    article
}

export {
    ACTION_TYPE,
    ACTION
}