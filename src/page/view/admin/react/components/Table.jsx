import React, { Component } from 'react';
import _ from "lodash";

import Pagination from './Pagination';
import TableToolbar from './TableToolbar';

class Table extends Component {
    renderToolbar() {
        let buttonList = [], { toolbar } = this.props;

        buttonList = toolbar.map((item, index) => {
            return (<button key={index} onClick={item.handle}>{item.text}</button>);
        });

        return buttonList;
    }

    // 生成列头
    renderHeader(){
        let { columns, checkbox, options } = this.props;
        let columnList = [];

        columnList = columns.map((item, index) => {
            let style = {};
            if(item.width) {
                style["width"] = item.width;
            }

            return (<th key={index} style={style}>{item.text}</th>);
        });

        return (
            <thead>
                <tr>
                    { checkbox ? <th style={{width: "25px"}}><input type="checkbox"/></th> : "" }
                    { columnList }
                    { _.isEmpty(options) ? "" : <th style={{width: "25px"}}>操作</th> }
                </tr>
            </thead>
        );
    }

    renderRow(rowData){
        let row = [], { columns } = this.props;;
        row = columns.map((item, index) => {
            let colName;
            if(item.func) {
                colName = <a onClick={item.func.bind(this, rowData.id)} className="btn btn-link btn-xs">{rowData[item.field]}</a>;
            } else {
                colName = rowData[item.field];
            }

            return (
                <td key={index} column={index}>
                    { colName }
                </td>
            )
        });
        return row;
    }

    renderOptions(id){
        let optionList, buttonList = [], { options } = this.props;
        if(_.isEmpty(options)) {
            optionList = '';
        } else {
            buttonList = options.map((item, index) =>
                <button key={index} className="btn btn-xs" 
                    style={{"marginRight":"5px"}}
                    onClick={item.handle.bind(this, id)} >{item.text}
                </button>
            );

            optionList = (
                <td>
                    { buttonList }
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
                { this.renderToolbar() }
                <table className="table table-hover table-condensed">
                    { this.renderHeader() }
                    <tbody>
                    {
                        list.map((item, index) =>
                            <tr key={index}>
                                { checkbox ? <td><input type="checkbox" value={item.id}/></td> : "" }
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
    columns: [],
    options: [],
    toolbar: false,
    data: {}
}

export default Table
