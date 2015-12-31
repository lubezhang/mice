import React, { Component } from 'react';

import { ACTION_TYPE, ACTION } from "../../../redux/actions";
import { Table } from "../../../../common/components";

export default class ArticleList extends Component {
    componentWillMount(){
    //     console.log("--------------ArticleList-----------------------")
        const { actions } = this.props;
        actions.funcArticleList();
    //     dispatch(ACTION.funcArticleList());
    }
    
    searchHandle(){
        const { actions } = this.props;
        actions.funcArticleList();
    }
    
    render(){
        debugger;
        console.log("-------------- render ArticleList-----------------------")
        const { articleList } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <a href="#/article/add" className="btn btn-info btn-xs">添加文章</a>
                        <input type="text" />
                        <button onClick={this.searchHandle.bind(this)}>查询</button>
                    </div>
                </div>
                <Table articleList={articleList} />
            </div>
        );
    }
}
