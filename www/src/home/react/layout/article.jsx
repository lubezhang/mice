import React, { Component } from "react";
import { connect } from "react-redux";

import ArticleContent from "../components/ArticleContent";
import { ACTION_TYPE, ACTION } from "../../redux/actions";

class Article extends Component {
    componentWillMount(){
        const { dispatch } = this.props;
        let { id } = this.props.params;
        dispatch(ACTION.article(id));
    }
    
    render () {
        const { article } = this.props;
        return (
            <div className="middle">
                <ArticleContent {...article}/>
            </div>
        );
    }
}

function getArticle(article = {}, filter = ""){
    switch(filter){
        default:
            return article;
    }
}

function select(state, action) {
    return {
        article: getArticle(state.article, state.filter)
    };
}

export default connect(select)(Article);