import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import ArticleList from "./article/ArticleList";
import ArticleAdd from "./article/ArticleAdd";

import { ACTION_TYPE, ACTION } from "../../redux/actions";
import * as ArticleActions from "../../redux/actions";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    analyzeResData(resData){
        if(_.isEmpty(resData)) {
            return false;
        }

        if(resData.errno !== 0) {
            console.log(resData.errmsg);
            return false;
        }

        return resData.data;
    }

    render(){
        let child, { actions, articleList, article } = this.props;
        articleList = this.analyzeResData(articleList);
        switch (this.props.params.method) {
            case "add":
                child = (<ArticleAdd article={article}  actions={actions} /> );
                break;
            default: 
                child = (<ArticleList articleList={articleList} actions={actions} />);
        }
        return (
            <div >
                { child }
            </div>
        );
    }
}

function getArticleList(articleList = {}, filter = ""){
    switch(filter){
        default:
            return articleList;
    }
}

function mapStateToProps(state) {
    return {
        articleList: state.articleList,
        article: state.article
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ArticleActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);
