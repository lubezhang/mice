import React, { Component } from 'react';

import { ACTION_TYPE, ACTION } from "../../../redux/actions";
import { Table } from "../../components";

export default class ArticleList extends Component {
    componentWillMount(){
        const { actions } = this.props;
        actions.funcArticleList();
    }
    
    searchHandle(){
        const { actions } = this.props;
        actions.funcArticleList();
    }
    
    render(){
        const { articleList } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <a href="#/article/add" className="btn btn-info btn-xs">添加文章</a>
                    </div>
                </div>
                <Table articleList={articleList} />
            </div>
        );
    }
}
