// nodeのコアモジュールのhttpを使う
var http = require('http');
var config = require('./config');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('request from: ' + req.url);
    res.end();
});

// サーバを待ち受け状態にする
// 第1引数: ポート番号
// 第2引数: IPアドレス
server.listen(config.port);

console.log('ポート番号: ' + config.port);
