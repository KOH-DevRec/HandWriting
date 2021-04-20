// nodeのコアモジュールのhttpを使う
var http = require('http');
var port = 1337;
var server = http.createServer();
server.on('request',doRequest);
// ファイルモジュールを読み込む
var fs = require('fs');
// リクエストの処理
function doRequest(req, res) {
    // ファイルを読み込んだら、コールバック関数を実行する。
    fs.readFile('./sample2.html', 'utf-8' , doReard );
    // コンテンツを表示する。
    function doReard(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
}
server.listen(port);

console.log('ポート番号: ' + port);
