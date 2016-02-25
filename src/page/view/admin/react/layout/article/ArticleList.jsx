import React, { Component } from 'react';
import _ from "lodash";
import { Alert } from 'react-bootstrap';

import { ACTION_TYPE } from "../../../common/constants";
import { Table } from "../../components";

export default class ArticleList extends Component {

    resultHandle(article){
        let { detail, actionType } = article;
        if(actionType === ACTION_TYPE.ARTICLE_DEL) {
            if(detail.errno === 0) {
                // 删除成功，重新加载列表
                detail.errmsg = "删除成功";
                this.searchHandle()
            } else {
                // 删除失败，显示错误信息
            }
            return <Alert>{detail.errmsg}</Alert>;
        }
        return ;
    }

    getTableColumn(){
        return {
            id: "编号",
            title: "标题"
        }
    }
    
    render(){
        let { actions, article } = this.props;
        let { articleList, detail, actionType } = article;
        
        let alert = this.resultHandle(article);
        let data = _.isEmpty(articleList) ? {} : articleList.data;
        return (
            <div>
                {alert}
                <div className="row">
                    <div className="col-md-12">
                        <a href="#/article/add" className="btn btn-info btn-xs">添加文章</a>
                    </div>
                </div>
                <Table 
                    data={data}
                    checkbox={true}
                    option={true}
                    column={this.getTableColumn()} 
                    searchHandle={actions.funcArticleList} 
                    deleteHandle={actions.funcArticleDel} 
                />
            </div>
        );
    }
}
