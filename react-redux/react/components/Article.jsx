import React, { Component } from "react";
import { Link } from 'react-router';

export default class Article extends Component {
    render () {
        return (
            <article className="article">
                <div className="title clearfix">
                    <h1><a href="/">{this.props.title}</a></h1>
                    <span className="create-time">{this.props.date}</span>
                </div>
                <div className="content">{this.props.contents}</div>
            </article>
        );
    }
}