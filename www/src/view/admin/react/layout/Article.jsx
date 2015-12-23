import React, { Component } from 'react';
import ArticleList from "./article/ArticleList"

export default class Article extends Component {
    render(){
        let child;
        if(this.props.children) {
            child = this.props.children;
        } else {
            child = (<ArticleList />);
        }
        return (
            <div >
                {child}
            </div>
        );
    }
}
