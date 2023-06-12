# npm install nodemon cross-env --save-dev

# 路由和 API

API：前端和后端等不同端之间对接的一个术语
路由：后端系统内部的一个模块

# cookie

存储在浏览中的一段字符串，最大 5kb
跨域不共享
每次发送 http 请求，会将请求域的 cookie 一起发给 server(请求的是哪个域就将哪个域的 cookie 带过去)
server 端可以修改 cookie 并返回给浏览器
浏览器中也可以通过 JavaScript 修改 cookie(有限制)

# session

服务端存储

# cookie 和 session 的区别

# redis

硬盘数据库
web server 最常用的缓存数据库，数据存放在内存中
相比于 mysql 访问速度更快
成本更高，可存储的数据量更小
清除整个 redis 服务器的数据：flushall
清除当前库中的所有 key：flushdb

# 为什么 session 适合 redis

session 访问频繁，对性能要求极高
session 可以不考虑断电丢失数据问题
session 存储量不会太大

# 为什么网站数据不适合用 redis(同上)

# Nginx

本地配置文件/usr/local/etc/nginx/nginx.conf
高性能的 web 服务器
一般用于做静态服务、负载均衡
做反向代理
测试配置文件格式是否正确 nginx -t
启动 nginx：nginx
重启 nginx：nginx -s reload
停止 nginx：nginx -s stop

# 常见错误

invalid PID number "" in "/var/run/nginx.pid"
依次执行
sudo service nginx stop
sudo rm /run/nginx.pid
sudo service nginx start
再次 check
sudo cat /run/nginx.pid

# 日志

日志存储到文件中
为什么不存储到 mysql 中
为什么不存储到 redis 中

定时执行 shell 脚本，使用 crontab
crontab -e 编辑
crontab -l 查看
手动执行 shell 脚本：sh copy-util.sh

# sql 注入攻击

攻击方式：输入一个 sql 片段，最终拼接成一段攻击代码
预防方式：Node 中 使用 escape 函数预防(会把特殊字符进行转义，从而把攻击代码处理成字符串)

# XSS 攻击

攻击方式：在页面展示内容中掺杂 js 代码以获取网页信息
预防方式：转换生成特殊字符(node 中使用 xss 插件)

# 密码加密

万一数据库被攻破，最不应该泄露的就是用户信息
攻击方式：获取用户名和密码去尝试登录其他系统
