import React, { Component } from 'react';
import { Link } from 'react-router';

export default class User extends Component {
    render(){
        return (
            <div className="user">
                <div className="avatar">
                    <Link to="/"></Link>
                </div>
                <div className="user-name">
                    <h1><Link to="/">用户名称dd</Link></h1>
                </div>
                <div className="user-desc">用户的描述</div>
            </div>
        );
    }
}