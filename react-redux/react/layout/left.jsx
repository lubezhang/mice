import React, { Component } from 'react';
import User from '../components/User'
import Nav from '../components/Nav'

export default class Left extends Component {
    render(){
        return (
            <div className="left">
                <User />
                <Nav />
            </div>
        );
    }
}