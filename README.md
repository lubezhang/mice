[![Build Status](https://travis-ci.org/lubezhang/RRT-blog.svg?branch=master)](https://travis-ci.org/lubezhang/RRT-blog)

## Mice 
一个使用 React+Redux+thinkjs 的简单blog系统。

## 安装
### 开发阶段(http://localhost:8360)
可以实现react组件、sass不刷新自动更新
~~~javascript
npm install
npm start
npm run static (请再开一个cmd执行)
~~~

### 上线
~~~javascript
npm install
npm start (pm2 start pm2.json) 
~~~