import React, { Component } from 'react';
import { Input, Button, Alert } from 'react-bootstrap';
import _ from "lodash";

import { ACTION_TYPE } from "../../../common/constants";
import { markdown } from "../../../common/markdown";

export default class ArticleAdd extends Component {
    constructor(props) {
        super(props);
        this.isInit = false;    // 是否使用后台数据初始化页面
        this.state = { 
            title: "",
            content: "",
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
        let { actions } = this.props;

        if(this.articleId) {
            
        } 
            
        actions.funcArticlePublish(this.articleId);
    }

    handleInput(){
        this.setState({
            title: this.refs.title.getValue(),
            content: this.refs.content.getValue(),
            markdownContent: markdown(this.refs.content.getValue())
        })
    }

    /**
     * 获取表单内的所有输入内容
     * @return {[type]} [description]
     */
    getFormValues(){
        let formValues = [];
        for(let key in this.refs){
            if(this.refs[key].getValue) {
                formValues[key] = this.refs[key].getValue();
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
                <Input type="text" label="标题" ref="title" placeholder="请输入文章标题" value={this.state.title} onInput={this.handleInput.bind(this)}/>
                <Input type="textarea" label="文章内容" onChange={this.handleInput.bind(this)} ref="content" placeholder="请输入文章内容" value={this.state.content} rows="20"/>
                { this.showAlert(article) }
                <div className="text-right">
                    <Button onClick={this.handleSave.bind(this)}>保存草稿</Button>
                    <Button bsStyle="danger" onClick={this.handlePublish.bind(this)}>发布文章</Button>
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
