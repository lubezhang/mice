import React, { Component } from 'react';
import { Input, ButtonToolbar, Button, Alert } from 'react-bootstrap';
import _ from "lodash";

import { ACTION_TYPE, ACTION } from "../../../redux/actions";

export default class ArticleAdd extends Component {
    submitHandle(){
        let { actions } = this.props;
        let data = this.getFormValues();
        actions.funcArticleAdd(data);
    }

    /**
     * 获取表单内的所有输入内容
     * @return {[type]} [description]
     */
    getFormValues(){
        let formValues = [];
        for(let key in this.refs){
            formValues[key] = this.refs[key].getValue();
        }
        return formValues;
    }

    showAlert(){
        let alert, { article } = this.props;
        if(_.isEmpty(article)){
            return "";
        } 

        if(article.errno === 0){
            alert = <Alert>添加成功</Alert>
        } else {
            alert = <Alert bsStyle="danger">{ article.errmsg }</Alert>
        }
        return alert;
    }

    render() {
        let { article } = this.props;
        let alert = this.showAlert();
        return (
            <form>
                <Input type="text" label="标题" ref="title" placeholder="请输入文章标题" />
                <Input type="textarea" label="文章内容" ref="content" placeholder="请输入文章内容" rows="20"/>
                
                { alert }
                <ButtonToolbar>
                    <Button bsStyle="danger" onClick={this.submitHandle.bind(this)}>保存</Button>
                    <a href='#/article' className="btn btn-default" >取消</a>
                </ButtonToolbar>
            </form>
        );
    }
}
