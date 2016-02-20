import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
var _ = require("lodash");

class Table extends Component {

    deleleHandle(articleId) {
        console.log(articleId);
    }

    render(){
        let list = _.isEmpty(this.props.articleList) ? [] : this.props.articleList.data;
        return (
            <div>
                <table className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>编号</th>
                            <th>标题</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((article, index) =>
                            <tr key={index}>
                                <td><input type="checkbox"/></td>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>
                                    <button className="btn btn-xs" onClick={this.deleleHandle.bind(this, article.id)}>删除</button>
                                </td>
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
