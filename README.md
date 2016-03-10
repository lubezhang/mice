[![Build Status](https://travis-ci.org/lubezhang/RRT-blog.svg?branch=master)](https://travis-ci.org/lubezhang/RRT-blog)

## Mice 
一个使用 React+Redux+thinkjs 的简单blog系统。

## 安装
### 开发阶段(http://localhost:8360)
可以实现react组件、sass不刷新自动更新
~~~javascript
npm run webpack-dev
npm run static   //启动静态资源服务
npm start  // 启动后台服务，自动编译后台代码
~~~

### 上线
~~~javascript
npm run webpack  // 编译前端代码
npm run compile // 编译后台代码
npm start (pm2 start pm2.json) // 启动服务
~~~