const net = require('net');
const _ = require('lodash');
const client = require('redis');

const pub = client.createClient(9736, 'localhost');
const sub = client.createClient(9736, 'localhost');

const brodcast_channel = 'brodcast';
const port = 666;
let connections = {};
const server = net.createServer((conn) => {
  console.log('client connect');
  let nickname = '';

  sub.subscribe(brodcast_channel, () => {
    console.log(`sub:${brodcast_channel}`);
  });

  sub.on('message', (channel, message) => {
    if (channel === brodcast_channel) {
      console.log('receive message from brodcast channel');
      conn.write(message);
    }
  });

  conn.on('data', (data) => {
    if (_.isEmpty(nickname)) {
      nickname = data.toString().replace('\n', '');
      if (connections[nickname]) {
        conn.write('该昵称已经存在，请更换一个昵称试一下');
      } else {
        connections[nickname] = conn;
        pub.publish(brodcast_channel, `${nickname}, 欢迎您的加入！`);
      } 
      const users = Object.keys(connections);
    } else {
      const [target, content = ''] = data.toString().split('#');
      if (target === 'brodcast') {
        pub.publish(brodcast_channel, content);
      } else {
        nickname = target.toString();
        if (connections[nickname]) {
          connections[nickname].write(content);
        } else {
          conn.write('不存该用户');
        }
      }
    }
  });

});


server.listen(port, () => {
  console.log(`listen port: ${port}`);
});
