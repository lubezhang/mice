import React, { Component } from 'react';

class TableToolbar extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default TableToolbar;