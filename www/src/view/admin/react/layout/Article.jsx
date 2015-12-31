import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ArticleList from "./article/ArticleList";
import ArticleAdd from "./article/ArticleAdd";

import { ACTION_TYPE, ACTION } from "../../redux/actions";
import * as ArticleActions from "../../redux/actions";

class Article extends Component {
    componentWillMount(){
        // const { dispatch } = this.props;
        // dispatch(ACTION.funcArticleList());
    }

    render(){
        debugger;
        let child, { actions, articleList } = this.props;
        switch (this.props.params.method) {
            case "add":
                child = (<ArticleAdd articleAdd={actions.funcArticleAdd}/>);
                break;
            default:
                child = (<ArticleList articleList={articleList} actions={actions}/>);
        }
        return (
            <div >
                {child}
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
    articleList: state.articleList
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
