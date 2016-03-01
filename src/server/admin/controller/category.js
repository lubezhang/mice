'use strict';

import moment from 'moment';

import Base from './base.js';
import _ from "lodash";
// import { markdown } from "../utils/markdown"

export default class extends Base {
  init(http){
    super.init(http);
    this.model = this.model("category");
  }

  async addAction(){
    
    
  }

  /**
   * 删除文章
   */
  async delAction(){
    
    
  }

  /**
   * 文章列表
   * @return {[type]} [description]
   */
  async allAction(){
    let list = await this.model.select();
    return this.success(list);
  }

}
