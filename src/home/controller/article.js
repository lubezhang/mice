'use strict';

import Base from './base.js';

export default class extends Base {
  __before(){
    this.articleModel = this.model("article");
  }

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

  async addAction(){
    // let username = this.get("username");
    // if(username){
    //   let userId = await this.userModel.add({"username":username, password: "admin999"});
    //   return this.success(userId);
    // } else {
    //   return this.fail("USERNAME_EMPTY");
    // }
    let title = this.post("title"), contents = this.post("contents");
    
    let article = {
      "title": title,
      "contents": contents
    }

    let articleId = await this.articleModel.add(article);
    return this.success(articleId);
  }

  async listAction(){
    let articleList = await this.articleModel.page(this.get("page"), 10).countSelect();
    return this.success(articleList);
  }

}