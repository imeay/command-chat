# 项目简介
基于 Net, process 模块, 结合 redis 的 pub/sub 实现的简易命令行聊天室。 解析了还需再完善细节。

# 项目启动
## 启动服务端
```
npm run server
```

## 启动客户端
```
npm run start
```

## redis 模块引进说明
虽然可以通过循环sokcet连接的方式，达到广播的效果，但项目抛弃了这种做法，采用了 redis 的pub/sub 来实现广播。


# 参考文档
* [https://nodejs.org/dist/latest-v10.x/docs/api/net.html](https://nodejs.org/dist/latest-v10.x/docs/api/net.html)
* [https://github.com/NodeRedis/node_redis](https://github.com/NodeRedis/node_redis)
