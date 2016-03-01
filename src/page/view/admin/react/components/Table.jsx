import React, { Component } from 'react';
import _ from "lodash";

import Pagination from './Pagination';
// import { Pagination } from 'react-bootstrap';

class Table extends Component {

    // handleDelete(id) {
    //     console.log(id);
    //     let { deleteHandle } = this.props;
    //     deleteHandle(id)
    // }

    renderRow(rowData){
        let row = [], { column } = this.props;;
        for(let key in column) {
            row.push(<td key={key}>{rowData[key]}</td>)
        }

        return row;
    }

    // 生成列头
    renderHeader(){
        let { column, checkbox, options } = this.props;
        let columns = [];
        for (let key in column) {
            columns.push(<th key={key} column={key}>{column[key]}</th>);
        }

        return (
            <thead>
                <tr>
                    { checkbox ? <th><input type="checkbox"/></th> : "" }
                    { columns }
                    { _.isEmpty(options) ? "" : <th>操作</th> }
                </tr>
            </thead>
        );
    }

    renderOptions(id){
        let optionList = [], { options } = this.props;
        if(_.isEmpty(options)) {
            optionList = '';
        } else {
            optionList = options.map((item, index) =>
                <td key={index}>
                    <button className="btn btn-xs" onClick={item.handle.bind(this, id)}>{item.text}</button>
                </td>
            );
        }

        return optionList;
    }

    render(){
        let { data, searchHandle, checkbox, toolbar } = this.props;
        let list = data.data || [];
        return (
            <div>
                { toolbar }
                <table className="table table-hover table-condensed">
                    { this.renderHeader() }
                    <tbody>
                    {
                        list.map((item, index) =>
                            <tr key={index}>
                                { checkbox ? <td><input type="checkbox"/></td> : "" }
                                { this.renderRow(item) }
                                { this.renderOptions(item.id) }
                            </tr>
                        )
                    }
                    </tbody>
                </table>

                <Pagination
                    prev
                    next
                    items={data.totalPages}
                    maxButtons={6}
                    activePage={data.currentPage}
                    onSelect={searchHandle} 
                />
            </div>
        );
    }
}

Table.defaultProps = {
    checkbox: false,
    column: [],
    options: [],
    toolbar: false,
    data: {}
}

export default Table
