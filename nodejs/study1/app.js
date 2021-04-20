// Setup requires.
const express = require('express');
const bodyParser = require('body-parser')
var fs = require('fs');
// Setup server and uses.
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Setup listen.
app.listen(1337);
console.log('Server is online.');
// GET
app.get('/', function(req, res) {
  console.log('GET Request.');
  res.render('index.ejs', { fs: fs ,title:'hogehoge',content:'hogehogehoge'});
  //res.header('Content-Type', 'text/plain;charset=utf-8');
  //res.end('GET承り太郎');
});
// POST
app.post('/', function(req, res) {
  console.log('POST Request.');
  const text = 'POST承り太郎' + req.body.name;
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.end(text);
});
