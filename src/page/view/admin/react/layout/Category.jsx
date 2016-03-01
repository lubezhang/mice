import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as ArticleActions from "../../redux/actions";

class Category extends Component {
    render(){
        return (
            <div className="middle">
                CategoryList
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
)(Category);