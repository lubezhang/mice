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
    let pageNum = this.get("page") || 1;
    console.log('page:', pageNum);

    let articleList = await this.model.page(pageNum, 10).where({status: 1}).select();
    articleList.map(article => {
      article.content = markdown(article.content.slice(0, 300));
      article.date = article.date?moment(article.date).format("YYYY-MM-DD HH:mm:ss"):""
    });
    this.assign({
      "articleList": articleList
    });
    return this.display();
  }

  apiAction(){
    return this.display();
  }

}