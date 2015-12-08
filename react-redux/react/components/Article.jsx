import React, { Component } from "react";
import { Link } from 'react-router';

export default class Article extends Component {
    render () {
        return (
            <article className="article">
                <div className="title clearfix">
                    <h1>
                        <Link to={"/article/"+this.props._id}>{this.props.title}</Link>
                    </h1>
                    <span className="create-time">{this.props.date}</span>
                </div>
                <div className="content">{this.props.contents}</div>
            </article>
        );
    }
}