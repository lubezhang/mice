import React, { Component } from 'react';
import { Input, ButtonToolbar, Button, Alert } from 'react-bootstrap';

import { ACTION_TYPE, ACTION } from "../../../redux/actions";

export default class ArticleAdd extends Component {
    submitHandle(){
        let data = this.getFormValues();
        this.props.articleAdd(data);
        // dispatch(submit(data));
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

    render() {
        console.log("-------------- render ArticleAdd-----------------------")
        return (
            <form>
                <Input type="text" label="标题" ref="title" placeholder="请输入文章标题" />
                <Input type="textarea" label="文章内容" ref="content" placeholder="请输入文章内容" rows="20"/>
                <Alert >添加成功</Alert>
                <ButtonToolbar>
                    <Button bsStyle="danger" onClick={this.submitHandle.bind(this)}>保存</Button>
                    <a href='#/article' className="btn btn-default" >取消</a>
                </ButtonToolbar>
            </form>
        );
    }
}
