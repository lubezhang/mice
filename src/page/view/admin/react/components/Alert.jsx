import React, { Component } from 'react';

export default class Alert extends Component {

    render() {
        return (
            <div role="alert" className="alert alert-info">
                <span>
                    {this.props.children || ""}
                </span>
            </div>
        );
    }
}
