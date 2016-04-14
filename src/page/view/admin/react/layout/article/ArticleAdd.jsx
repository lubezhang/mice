import React, { Component } from 'react';
import _ from "lodash";

import { Alert } from '../../components';
import { ACTION_TYPE } from "../../../common/constants";
import { markdown } from "../../../common/markdown";

export default class ArticleAdd extends Component {
    constructor(props) {
        super(props);
        this.isInit = false;    // 是否使用后台数据初始化页面
        this.state = { 
            title: "",
            draft_content: "",
            markdownContent: "" 
        };
    }

    componentWillMount(){
        let { articleId, actions } = this.props;
        if(articleId) {
            actions.funcArticleDetail(articleId);
        }
    }

    handleSave(){
        let { actions } = this.props, 
            data = this.getFormValues();

        if(this.articleId) {
            data.id = this.articleId;
        } 
            
        actions.funcArticleAdd(data);
    }

    handlePublish() {
        let { actions } = this.props, 
            data = this.getFormValues();

        if(this.articleId) {
            data.id = this.articleId;
        }
            
        actions.funcArticlePublish(data);
    }

    handleInput(){
        this.setState({
            title: this.refs.title.value,
            draft_content: this.refs.content.value,
            markdownContent: markdown(this.refs.content.value)
        })
    }

    /**
     * 获取表单内的所有输入内容
     * @return {[type]} [description]
     */
    getFormValues(){
        let formValues = [];
        for(let key in this.refs){
            if(this.refs[key].value) {
                formValues[key] = this.refs[key].value;
            }  
        }
        return formValues;
    }

    showDetail(article){
        if(this.isInit === true) {
            return;
        }

        let { detail, actionType } = article ;
        if(actionType === ACTION_TYPE.ARTICLE_DETAIL) {
            this.isInit = true;
            this.articleId = detail.data.id;
            this.setState(detail.data);

            setTimeout(this.handleInput.bind(this), 500)
        }
    }

    showAlert(article){
        let alert, { detail, actionType } = article;
        if(actionType === ACTION_TYPE.ARTICLE_ADD || actionType === ACTION_TYPE.ARTICLE_PUBLISH) {
            if(detail.errno === 0) {
                this.articleId = detail.data;
                alert = <Alert>操作成功</Alert>;
            } else {
                // 删除失败，显示错误信息
                alert = <Alert bsStyle="danger">{ article.errmsg }</Alert>
            }
        }
        return alert;
    }

    render() {
        let { article } = this.props;
        this.showDetail.bind(this, article)();

        return (
            <div>
            <form>
                <div className='form-group'>
                    <label className="control-label">标题</label> 
                    <input className="form-control" ref="title" value={this.state.title} onInput={this.handleInput.bind(this)} type="text" lable="标题" placeholder="请输入文章标题"/>
                </div>
                <div className='form-group'>
                    <label className="control-label">文章内容</label>
                    <textarea className="form-control" value={this.state.draft_content} onChange={this.handleInput.bind(this)} ref="content" label="文章内容" placeholder="请输入文章内容" rows="20"></textarea>
                </div>
                { this.showAlert(article) }
                <div className="text-right">
                    <button className="btn btn-default" onClick={this.handleSave.bind(this)}>保存草稿</button>
                    <button className="btn btn-danger" bsStyle="danger" onClick={this.handlePublish.bind(this)}>发布文章</button>
                </div>
            </form>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">预览</h3>
                </div>
                <div className="panel-body" ref="markdownContent" dangerouslySetInnerHTML={{__html: this.state.markdownContent}}>
                </div>
            </div>
            </div>
        );
    }
}
