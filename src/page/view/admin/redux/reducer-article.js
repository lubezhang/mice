import { ACTION_TYPE } from "../common/constants";

function articleList(articleList = {}, action = {}) {
    switch (action.type) {
        case ACTION_TYPE.ARTICLE_LIST:
            return Object.assign({}, action.articleList);
        default:
            return articleList;
    }
}

function article(article = {}, action = {}) {
    switch (action.type) {
        case ACTION_TYPE.ARTICLE_ADD:
        case ACTION_TYPE.ARTICLE_DEL:
            return Object.assign({}, action.article);
        default:
            return article;
    }
}

export default {
    articleList,
    article
}