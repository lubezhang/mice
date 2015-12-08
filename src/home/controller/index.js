'use strict';

import Base from './base.js';

export default class extends Base {
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
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  apiAction(){
    return this.display();
  }

}