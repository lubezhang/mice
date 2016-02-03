'use strict';

import moment from 'moment';

import Base from './base.js';
import _ from "lodash";
// import { markdown } from "../utils/markdown"

export default class extends Base {
  init(http){
    super.init(http);
    this.model = this.model("article");
  }
  // __before(){
  //   this.model = this.model("article");
  // }

  // __after(){
  //   console.log("__after");
  // }
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  /**
   * 添加文章
   */
  async addAction(){
    let title = this.post("title"), content = this.post("content");

    let article = {
      "title": title,
      "content": content,
      "date": moment() 
    }

    let articleId = await this.model.add(article);
    if(_.isNumber(articleId)){
      return this.success(articleId);
    } else {
      return this.fail("ARTICLE_ADD_FAIL");
    }
    
  }

  /**
   * 删除文章
   */
  async delAction(){
    let articleId = this.post("articleId");

    let affectedRows = await this.model.where({id: articleId}).delete();
    if(_.isNumber(affectedRows)){
      return this.success(affectedRows);
    } else {
      return this.fail("ARTICLE_ADD_FAIL");
    }
    
  }

  /**
   * 文章列表
   * @return {[type]} [description]
   */
  async listAction(){
    let that = this;
    let articleList = await this.model.field("id,title").page(this.get("page"), 10).countSelect();
    // console.log(JSON.stringify(articleList));
    return this.success(articleList);
  }

  /**
   * 获取文章详细内容
   * @return {[type]} [description]
   */
  async cAction(){
    let id = this.param("id");
    let article = await this.model.where({"id": id}).find();
    // article.content = markdown(article.content);
    return this.success(article).catch(function(err){
      //忽略 PREVENT_NEXT_PROCESS 错误
      if(think.isPrevent(err)){
        return;
      }
      console.log(err.stack);
    });
  }

}
