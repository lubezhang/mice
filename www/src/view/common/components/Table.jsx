import React, { Component } from 'react';

class Table extends Component {
    render(){
        return (
            <table className="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>标题</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>测试标题</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>测试标题</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>测试标题</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table
