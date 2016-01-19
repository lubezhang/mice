import React, { Component } from "react";

import Article from "./Article";

export default class ArticleList extends Component {
    // componentWillReceiveProps(){
    //     console.log("componentWillReceiveProps");
    // }
    
    // componentWillMount(){
    //     console.log("componentWillMount");
    // }

    // componentDidMount(){
    //     console.log("componentDidMount");
    // }

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