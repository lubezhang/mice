import React, { Component } from 'react';
import Pagination from './Pagination';
// import { Pagination } from 'react-bootstrap';

class Table extends Component {

    deleleHandle(id) {
        console.log(id);
        let { deleteHandle } = this.props;
        deleteHandle(id)
    }

    createHeader(){
        let { column, checkbox, option } = this.props;
        let columns = [];
        for (let key in column) {
            columns.push(<th column={key}>{column[key]}</th>);
        }

        return (
            <thead>
                <tr>
                    { checkbox ? <th><input type="checkbox"/></th> : "" }
                    { columns }
                    { option ? <th>操作</th> : "" }
                </tr>
            </thead>
        );
    }

    render(){
        let { data, searchHandle, checkbox, option } = this.props;
        let list = data.data || [];
        return (
            <div>
                <table className="table table-hover table-condensed">
                    { this.createHeader() }
                    <tbody>
                    {
                        list.map((item, index) =>
                            <tr key={index}>
                                { checkbox ? <td><input type="checkbox"/></td> : "" }
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                { 
                                    option ? 
                                        (<td>
                                            <button className="btn btn-xs" onClick={this.deleleHandle.bind(this, item.id)}>删除</button>
                                        </td>) : "" 
                                }
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
                    boundaryLinks
                    items={data.totalPages}
                    maxButtons={6}
                    activePage={data.currentPage}
                    onSelect={searchHandle} />
            </div>
        );
    }
}

Table.defaultProps = {
    checkbox: false,
    column: [],
    option: false,
    data: {}
}

export default Table
