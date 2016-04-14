import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ArticleList from "./article/ArticleList";
import ArticleAdd from "./article/ArticleAdd";
import * as ArticleActions from "../../redux/actions";

import { analyzeResponseData } from "../../common/utils";

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

@connect(mapStateToProps, mapDispatchToProps)
export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount(){
    //     console.log("************* componentWillMount");
    // }

    // componentWillUnmount(){
    //     console.log("$$$$$$$$$$$$$ componentWillUnmount");
    // }

    // componentWillReceiveProps(){
    //     console.log("************* componentWillReceiveProps");
    // }

    // // shouldComponentUpdate(){
    // //     console.log("************* shouldComponentUpdate");
    // // }

    // componentWillUpdate(){
    //     console.log("************* componentWillUpdate");
    // }

    // componentDidUpdate(){
    //     console.log("************* componentDidUpdate");
    // }

    render(){
        let child, { actions, article, history } = this.props;
        let { data, result } = analyzeResponseData(article.articleList);
        // console.log(obj); 
        // debugger;

        switch (this.props.params.method) {
            case "add":
                let articleId = this.props.params.articleId;
                child = (<ArticleAdd article={article} articleId={articleId} actions={actions} /> );
                break;
            default: 
                child = (<ArticleList article={article} history={history} actions={actions} />);
        }
        return (
            <div >
                { child }
            </div>
        );
    }
}


