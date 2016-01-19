import React, { Component } from 'react';
import { Input, ButtonToolbar, Button, Alert, Panel } from 'react-bootstrap';
import _ from "lodash";

import { ACTION_TYPE, ACTION } from "../../../redux/actions";
import { markdown } from "../../../common/markdown";

export default class ArticleAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { markdownContent: "" };
    }

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
            if(this.refs[key].getValue) {
                formValues[key] = this.refs[key].getValue();

            }  
        }
        return formValues;
    }

    /**
     * 预览markdown样式
     * @return {[type]} [description]
     */
    previewMarkdown(){
        this.setState({
            markdownContent: markdown(this.refs.content.getValue())
        })
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
            <div>
            <form>
                <Input type="text" label="标题" ref="title" placeholder="请输入文章标题" />
                <Input type="textarea" label="文章内容" ref="content" placeholder="请输入文章内容" rows="20"/>
                { alert }
                <ButtonToolbar>
                    <Button bsStyle="danger" onClick={this.submitHandle.bind(this)}>保存</Button>
                    <Button bsStyle="info" onClick={this.previewMarkdown.bind(this)}>预览</Button>
                    <a href='#/article' className="btn btn-default" >取消</a>
                </ButtonToolbar>
            </form>
            <Panel>
                <div ref="markdownContent" dangerouslySetInnerHTML={{__html: this.state.markdownContent}}>
                </div>
            </Panel>
            </div>
        );
    }
}
