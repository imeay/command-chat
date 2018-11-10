const net = require('net');

const client = net.connect(666, (socket) => {
  console.log('请输入用户名：');
});

process.stdin.on('readable', () => {
  const chunk = process.stdin.read() || '';
  if (chunk) {
    client.write(chunk.toString());
  }
})

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', function () {
  console.log('断开与服务器的连接');
});