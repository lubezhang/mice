import React, { Component } from 'react';
import { connect } from "react-redux";

import ArticleList from "../components/ArticleList";

class First extends Component {
    render(){
        const { articleList } = this.props;
        return (
            <div className="middle">
                <ArticleList articleList={articleList} />
            </div>
        );
    }
}

let articlelistMock = [
    {
        id: 1,
        title: "title1",
        contents: "内容",
        date: "2015-11-11"
    },
    { 
        id: 2,
        title: "title2dd",
        contents: "内容21",
        date: "2015-11-11"
    },
    {
        id: 3,
        title: "title3",
        contents: "内容3",
        date: "2015-11-11"
    }
];

function getArticleList(articleList = [], filter = ""){
    switch(filter){
        case "mock":
            return articlelistMock;
        default:
            return articleList;
    }
}

function select(state) {
    return {
        articleList: getArticleList(state.articleList, "mock")
    };
}

export default connect(select)(First);