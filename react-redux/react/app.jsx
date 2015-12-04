import React, { Component } from 'react';
import { Left } from "./layout"

export default class App extends Component {
    render(){
        return (
            <div className="container">
                <Left />
                {this.props.children}
            </div>
        );
    }
}