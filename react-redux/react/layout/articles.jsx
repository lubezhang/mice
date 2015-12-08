import React, { Component } from 'react';
import { connect } from "react-redux";

import ArticleList from "../components/ArticleList";
import { ACTION_TYPE, ACTION } from "../../redux/actions";

class Articles extends Component {

    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(ACTION.articleList());
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
        default:
            return articleList;
    }
}

function select(state, action) {
    return {
        articleList: getArticleList(state.articleList, state.filter)
    };
}

export default connect(select)(Articles);