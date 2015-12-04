import React, { Component } from "react";
import { Link } from 'react-router';

export default class Nav extends Component {
    render () {
        return (
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/series">专题</Link></li>
                    <li><Link to="/archives">归档</Link></li>
                    <li><Link to="/tags">标签</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
            </nav>
        );
    }
}