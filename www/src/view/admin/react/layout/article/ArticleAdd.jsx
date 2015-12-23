import React, { Component } from 'react';

import { Input, ButtonToolbar, Button } from 'react-bootstrap';

export default class ArticleAdd extends Component {

    render() {
        return (
            <form>
                <Input type="text" label="标题" placeholder="请输入文章标题" />
                <Input type="textarea" label="文章内容" placeholder="请输入文章内容" rows="20"/>
                <ButtonToolbar>
                    <Button bsStyle="danger">保存</Button>
                    <a href='#/article' className="btn btn-default" >取消</a>
                </ButtonToolbar>
            </form>
        );
    }
}
