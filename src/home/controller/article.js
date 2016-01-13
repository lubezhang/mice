'use strict';

import Base from './base.js';
import { markdown } from "../utils/markdown"

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

  /**
   * 获取文章详细内容
   * @return {[type]} [description]
   */
  async cAction(){
    let id = this.param("id");
    let article = await this.model.where({"id": id}).find();
    article.content = markdown(article.content);
    return this.success(article);
  }

}
