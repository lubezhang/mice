import React, { Component } from 'react';
import { connect } from "react-redux";

import ArticleList from "../components/ArticleList";
import { ACTION_TYPE, articleList } from "../../redux/actions";

class First extends Component {

    componentDidMount(){
        console.log("componentDidMount by First");
        const { dispatch } = this.props;
        dispatch(articleList());
    }

    render(){
        const { articleList } = this.props;
        return (
            <div className="middle">
                <ArticleList articleList={articleList} />
            </div>
        );
    }
}

function getArticleList(articleList = [], filter = ""){
    switch(filter){
        case "articleList":
            return articleList;
        default:
            return articleList;
    }
}

function select(state) {
    return {
        articleList: getArticleList(state.articleList, state.filter)
    };
}

export default connect(select)(First);