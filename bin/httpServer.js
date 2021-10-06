// 导入 http 模块
const http = require('http');
// 创建一个http server服务
const server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("hello world");
});
server.listen(8888);