# 项目简介
基于 Net, process 模块, 结合 redis 的 pub/sub 实现的简易命令行聊天室。

# 启动
## 启动服务端
```
npm run server
```

## 启动
```
npm run start
```

## redis 模块引进说明
虽然可以通过循环sokcet连接的方式，达到广播的效果，但想了下，可以利用 redis 的 pub/sub 来实现广播。


# 参考文档
* [https://nodejs.org/dist/latest-v10.x/docs/api/net.html](https://nodejs.org/dist/latest-v10.x/docs/api/net.html)
* [https://github.com/NodeRedis/node_redis](https://github.com/NodeRedis/node_redis)
