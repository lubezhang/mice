const ACTION_TYPE = {
    ARTICLE: "article",
    ARTICLE_LIST: "article_list",
    ARTICLE_ADD: "article_add",
    ARTICLE_PUBLISH: "article_publish",
    ARTICLE_DEL: "article_del",
    ARTICLE_DETAIL: "article_detail"
};

const ACTION_URL = {
    article_list: "/article/list",
    article_add: "/article/add_or_update",
    article_publish: "/article/publish",
    article_del: "/article/del",
    article_detail: "/article/detail"
};

export {
    ACTION_TYPE,
    ACTION_URL
};