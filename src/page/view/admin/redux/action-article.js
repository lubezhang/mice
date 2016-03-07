import { fecthPosts } from './action-fecth';
import { ACTION_TYPE, ACTION_URL } from "../common/constants";

/**
 * 获取文章列表
 * @return {[type]} [description]
 */
export function funcArticleList(params) {
    return (dispatch, getState) => {
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE_LIST, params));
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
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE_DEL, {articleId:articleId}));
    };
}

export function funcArticleDetail(articleId){
    return (dispatch, getState) => {
        return dispatch(fecthPosts(ACTION_TYPE.ARTICLE_DETAIL, {articleId:articleId}));
    };
}