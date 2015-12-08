import React, { Component } from "react";
import { Link } from 'react-router';

export default class Article extends Component {
    render () {
        return (
            <article>
                文章内容展示组件
                <h1>{this.props.title}</h1>
                <h3>{this.props.contents}</h3>
            </article>
        );
    }
}