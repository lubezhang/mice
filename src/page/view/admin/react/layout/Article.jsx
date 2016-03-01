import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";

import ArticleList from "./article/ArticleList";
import ArticleAdd from "./article/ArticleAdd";
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
        let child, { actions, article } = this.props;
        let articleList = this.analyzeResData(article.articleList);
        // let article = this.analyzeResData(article.detail);

        switch (this.props.params.method) {
            case "add":
                child = (<ArticleAdd article={article}  actions={actions} /> );
                break;
            default: 
                child = (<ArticleList article={article} actions={actions} />);
        }
        return (
            <div >
                { child }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        article: {
            articleList: state.articleList,
            detail: state.article,
            actionType: state.actionType
        }
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
