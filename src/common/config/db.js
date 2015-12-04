'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mongo',
  host: '10.16.93.35',
  port: '',
  name: 'blog',
  user: '',
  pwd: '',
  prefix: 'think_',
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