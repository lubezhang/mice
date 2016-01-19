import React, { Component } from 'react';

import { Header } from "./components"

export default class App extends Component {
    render(){
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children || "Welcome"}
                </div>
            </div>
        );
    }
}
