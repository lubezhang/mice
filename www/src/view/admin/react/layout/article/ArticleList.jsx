import React, { Component } from 'react';

import { Table } from "../../../../common/components";

export default class ArticleList extends Component {

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <a href="#/article/add" className="btn btn-info btn-xs">添加文章</a>
                    </div>
                </div>
                <Table />
            </div>
        );
    }
}
