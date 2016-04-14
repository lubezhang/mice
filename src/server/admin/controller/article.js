'use strict';

import moment from 'moment';

import Base from './base.js';
import _ from "lodash";

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
   * 已经废弃，使用addOrUpdateAction代替
   */
  async addAction(){
    let title = this.post("title"), content = this.post("content");

    let date = moment().format('YYYY-MM-DD[T]HH:mm:ss');
    let article = {
      "title": title,
      "content": content,
      "status": 2,
      "category_id": 120,
      "date": date
    }

    let articleId = await this.model.add(article);
    if(_.isNumber(articleId)){
      return this.success(articleId);
    } else {
      return this.fail("ARTICLE_ADD_FAIL");
    }
  }

  async addOrUpdateAction(){
    let result, article = this.packRequestData(), date = moment().format('YYYY-MM-DD[T]HH:mm:ss');


    if(article.id) {
      // 有id，执行更新操作
      article.modify_date = date;
      delete article.date;
      delete article.category_id;

      let updatNum = await this.model.where({id: article.id}).update(article);
      result = article.id;
    } else {
      // 新增操作
      article.status = 2;
      result = await this.model.add(article);
    }

    if(_.isNumber(_.parseInt(result))){
      return this.success(result);
    } else {
      return this.fail("ARTICLE_ADD_FAIL");
    }
  }

  async publishAction() {
    let result, article = this.packRequestData(), date = moment().format('YYYY-MM-DD[T]HH:mm:ss');

    article.content = article.draft_content;

    if(article.id) {
      // 有id，执行更新操作
      article.modify_date = date;
      article.status = 1;
      delete article.date;
      delete article.category_id;

      let updatNum = await this.model.where({id: article.id}).update(article);
      result = article.id;
    } else {
      // 新增操作
      article.status = 1;
      result = await this.model.add(article);
    }

    if(_.isNumber(_.parseInt(result))){
      return this.success(result);
    } else {
      return this.fail("ARTICLE_ADD_FAIL");
    }
  }

  /**
   * 删除文章
   */
  async delAction(){
    let articleId = this.post("articleId");

    let affectedRows = await this.model
        .where({id: articleId})
        .update({
          status: 3,
          modify_date: moment().format('YYYY-MM-DD[T]HH:mm:ss')
        });
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
    let currentPage = this.param("currentPage") || 1,
        numsPerPage = this.param("numsPerPage") || 10;

    let articleList = await this.model
        .field("`article`.`id`, title, category_id, `category`.`name` as `category_name`, status, date")
        .join([{
            table: 'category',
            on: ['category_id', 'id']
          }])
        .where('status = 1 or status = 2')
        .page(currentPage, numsPerPage).countSelect();

    articleList.data.map(article => {
      article.date = article.date?moment(article.date).format("YYYY-MM-DD HH:mm"):"";

      switch(article.status){
        case 1:
          article.status = "已发布";
          break;
        case 2:
          article.status = "草稿";
          break;
      }
    });
    return this.success(articleList);
  }

  /**
   * 获取文章详细内容
   * @return {[type]} [description]
   */
  async detailAction(){
    let articleId = this.param("articleId");
    let article = await this.model.where({"id": articleId}).find();
    // article.content = markdown(article.content);
    return this.success(article).catch(function(err){
      //忽略 PREVENT_NEXT_PROCESS 错误
      if(think.isPrevent(err)){
        return;
      }
      console.log(err.stack);
    });
  }

  /**
   * 将前端提交的数据组装成json格式，返回
   * @return {json} 返回组装好的json数据 
   */
  packRequestData(){
    let id = this.post("id"),
        title = this.post("title"), 
        content = this.post("content");

    let date = moment().format('YYYY-MM-DD[T]HH:mm:ss');
    let article = {
      "title": title,
      "draft_content": content,
      "category_id": 120,
      "date": date
    }

    if(id) {
      article.id = id;
    }

    return article;
  }

}
