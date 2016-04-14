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
    
    return this.display();
  }

  apiAction(){
    return this.display();
  }

}