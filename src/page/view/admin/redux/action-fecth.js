import fetch from "isomorphic-fetch"; 

import { ACTION_TYPE, ACTION_URL } from "../common/constants";

let isTest = false;

function getUrl(actionType) {
    return (isTest ? "http://127.0.0.1:8360" : "") + "/admin" + ACTION_URL[actionType]
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
            state.articleList = json;
            break;
        case ACTION_TYPE.ARTICLE_ADD:
        case ACTION_TYPE.ARTICLE_DEL:
        case ACTION_TYPE.ARTICLE_DETAIL:
            state.article = json;
            break;

    }
    return state;
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
        fetch(getUrl(actionType), { 
                method: "POST", 
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:paramList.join("&") 
            })
            .then(response => response.json())
            .then(json => dispatch(receivePosts(actionType, json)));
    };
}

function setTest() {
    isTest = true;
}

export {
    fecthPosts,
    setTest
}