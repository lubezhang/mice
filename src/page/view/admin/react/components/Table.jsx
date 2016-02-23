import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';


class Table extends Component {

    deleleHandle(id) {
        console.log(id);
        let { deleteHandle } = this.props;
        deleteHandle(id)
    }

    render(){
        let { list } = this.props;
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
                        list.map((item, index) =>
                            <tr key={index}>
                                <td><input type="checkbox"/></td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>
                                    <button className="btn btn-xs" onClick={this.deleleHandle.bind(this, item.id)}>删除</button>
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
