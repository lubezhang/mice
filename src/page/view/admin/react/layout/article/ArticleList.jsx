import React, { Component } from 'react';
import _ from "lodash";
import { Alert } from 'react-bootstrap';

import { ACTION_TYPE } from "../../../common/constants";
import { Table, TableToolbar } from "../../components";

export default class ArticleList extends Component {

    resultHandle(article){
        let { actions } = this.props;
        let { detail, actionType } = article;
        if(actionType === ACTION_TYPE.ARTICLE_DEL) {
            if(detail.errno === 0) {
                // 删除成功，重新加载列表
                detail.errmsg = "删除成功";
                actions.funcArticleList()
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
            title: "标题",
            category_id: "类别",
            date: "创建时间"
        }
    }

    getOptions(){
        let { actions } = this.props;
        return [
            {
                text: "删除",
                handle: actions.funcArticleDel
            }
        ];
    }

    getTableToolbar(){
        return (
            <TableToolbar>
                <a href="#/article/add" className="btn btn-info btn-xs">添加文章</a>
            </TableToolbar>
        );
    }
    
    render(){
        let { actions, article } = this.props;
        let { articleList, detail, actionType } = article;
        
        let alert = this.resultHandle(article);
        let data = _.isEmpty(articleList) ? {} : articleList.data;
        return (
            <div>
                {alert}
                <Table 
                    data={data}
                    checkbox={true}
                    options={this.getOptions()}
                    toolbar={this.getTableToolbar()}
                    column={this.getTableColumn()} 
                    searchHandle={actions.funcArticleList}
                />
            </div>
        );
    }
}
