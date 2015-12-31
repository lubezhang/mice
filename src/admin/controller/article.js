'use strict';

import Base from './base.js';
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
    // let username = this.get("username");
    // if(username){
    //   let userId = await this.userModel.add({"username":username, password: "admin999"});
    //   return this.success(userId);
    // } else {
    //   return this.fail("USERNAME_EMPTY");
    // }
    let title = this.post("title"), content = this.post("content");

    let article = {
      "title": title,
      "content": content
    }

    let articleId = await this.model.add(article);
    return this.success(articleId);
  }

  /**
   * 文章列表
   * @return {[type]} [description]
   */
  async listAction(){
    let articleList = await this.model.field("id,title").page(this.get("page"), 10).countSelect();
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
    return this.success(article);
  }

}
