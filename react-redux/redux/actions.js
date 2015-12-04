const ACTION_TYPE = {
    ARTICLE_QUERY: "article_query",
    ARTICLE_SHOW: "article_show",
    ARTICLE_ADD: "article_add"
};

function articleAdd(article){
    return {type: ACTION_TYPE.ARTICLE_ADD, article};
}

export {
    ACTION_TYPE,
    articleAdd
}