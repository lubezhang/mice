import React, { Component } from "react";
import { Link } from 'react-router';

export default class Article extends Component {
    render () {
        let content = this.props.contents;
        return (
            <article>
                <h1>{this.props.title}</h1>
                <h3 dangerouslySetInnerHTML={{__html: content}}></h3>

            </article>
        );
    }
}