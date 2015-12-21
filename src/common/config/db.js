'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  host: '123.56.230.121',
  port: '3306',
  name: 'blog',
  user: 'root',
  pwd: 'qwe123',
  prefix: '',
  encoding: 'utf8',
  nums_per_page: 10,
  log_sql: true,
  log_connect: true,
  cache: {
    on: true,
    type: '',
    timeout: 3600
  },
  options: {
    authSource: 'admin'
  }
};
