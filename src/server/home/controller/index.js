'use strict';

import moment from 'moment';

import Base from './base.js';
import { markdown } from "../utils/markdown"

export default class extends Base {
  init(http){
    super.init(http);
    this.model = this.model("article");
  }
  // __before(){
  //   console.log("__before");
  // }

  // __after(){
  //   console.log("__after");
  // }
  /**
   * index action
   * @return {Promise} []
   */
  
  async indexAction(){
    let articleList = await this.model.page(this.get("page"), 10).countSelect();
    articleList.data.map(article => {
      article.content = markdown(article.content.slice(0, 300));
      article.date = moment(article.date).format("YYYY-MM-DD")
    });
    this.assign({
      "articleList": articleList.data,
    });
    return this.display();
  }

  apiAction(){
    return this.display();
  }

    /**
   * 文章列表
   * @return {[type]} [description]
   */
  async listAction(){
    let articleList = await this.model.page(this.get("page"), 10).countSelect();
    articleList.data.map(article => {
      article.content = article.content.slice(0, 300);
    });
    return this.success(articleList);
  }

}