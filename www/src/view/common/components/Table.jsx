import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
var _ = require("underscore");

class Table extends Component {

    handleSelect(event, selectedEvent) {
        this.setState({activePage: selectedEvent.eventKey});
    }

    render(){
        let list = _.isEmpty(this.props.articleList) ? [] : this.props.articleList.data;
        return (
            <div>
                <table className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>标题</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((article, index) =>
                                <tr key={index}>
                                    <td>{article.id}</td>
                                    <td>{article.title}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    items={20}
                    maxButtons={5}
                    activePage={1}
                    onSelect={this.handleSelect} />
            </div>
        );
    }
}

export default Table
