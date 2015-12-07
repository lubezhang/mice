import fetch from "isomorphic-fetch";

const ACTION_TYPE = {
    ARTICLE_LIST: "article_list",
    ARTICLE_SHOW: "article_show",
    ARTICLE_ADD: "article_add"
};

function fecthPosts(){
    return dispatch => {
        fetch("/article/list")
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json.data)))
    }
}

function receivePosts(json){   
    return {
        type: ACTION_TYPE.ARTICLE_LIST,
        articleList: json.data
    }
}

function articleAdd(article){
    return {type: ACTION_TYPE.ARTICLE_ADD, article};
}

function articleList() {
    return (dispatch, getState) => {
        return dispatch(fecthPosts());
    }
}

export {
    ACTION_TYPE,
    articleAdd,
    articleList
}