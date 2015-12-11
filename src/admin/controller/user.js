'use strict';

import Base from './base.js';

export default class extends Base {
  __before(){
    this.userModel = this.model("user");
  }
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    return this.display();
  }

  async addAction(){
    let username = this.get("username");
    if(username){
      let userId = await this.userModel.add({"username":username, password: "admin999"});
      return this.success(userId);
    } else {
      return this.fail("USERNAME_EMPTY");
    }
  }

  async listAction(){
    let userList = await this.userModel.page(this.get("page"), 10).countSelect();
    return this.success(userList);
  }

  async infoAction(){
    let userInfo = await this.session("userInfo");
    return this.success(userInfo);
  }

  async loginAction(){
    let username = this.get("username");
    let result = await this.userModel.where({"username":username}).select();
    if(result && result.length > 0){
      await this.session("userInfo", result[0]);
      return this.success(result[0]);
    } else {
      return this.fail("USERNAME_LOGIN_ERROR");
    }
  }

  async deleteAction(){
    let username = this.get("username");
    let result = await this.userModel.where({"username":username}).delete();
    return this.success(result);
  }
}