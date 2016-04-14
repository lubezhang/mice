import { combineReducers } from "redux";

import { ACTION_TYPE } from "./actions";

function articleList(articleList = [], action = {}) {
    switch (action.type) {
        case ACTION_TYPE.ARTICLE_LIST:
            return Object.assign([], action.articleList);
        default:
            return articleList;
    }
}

function article(article = {}, action = {}) {
    switch (action.type) {
        case ACTION_TYPE.ARTICLE:
            return Object.assign({}, action.article);
        default:
            return article;
    }
}

export default combineReducers({
    articleList,
    article
});

// export default function toApp(state, action){
//     debugger;
//     return {
//         articleList: articleList(state.articleList, action);
//     }
// }()
