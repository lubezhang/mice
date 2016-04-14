 'use strict';

 export default {
     port: 8360,
     log_request: true,
     db: {
         type: 'mysql',
         host: '10.16.93.35',
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
     }
 };