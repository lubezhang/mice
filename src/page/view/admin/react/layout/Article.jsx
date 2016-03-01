import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ArticleList from "./article/ArticleList";
import ArticleAdd from "./article/ArticleAdd";
import * as ArticleActions from "../../redux/actions";

import { analyzeResponseData } from "../../common/utils";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let child, { actions, article } = this.props;
        let { data, result } = analyzeResponseData(article.articleList);
        // console.log(obj);
        // debugger;

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
