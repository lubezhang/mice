export default {
  type: "memory",
  name: "thinkjs", //对应 cookie 的名称
  // path: runtimePrefix + "/session",  // file 类型下缓存文件的目录
  secret: "blog", //Session 对应的 cookie 是否需要加密
  timeout: 24 * 3600, //过期时间，默认为一天
  cookie: { //Session 对应的 cookie 配置项
    length: 32
  }
};
