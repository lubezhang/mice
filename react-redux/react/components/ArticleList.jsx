import React, { Component } from "react";

import Article from "./Article";

export default class ArticleList extends Component {
    render(){
        return (
            <div>
                {this.props.articleList.map((article, index) => 
                    <Article {...article}  key={index} />
                )} 
            </div>
        );
    }
}