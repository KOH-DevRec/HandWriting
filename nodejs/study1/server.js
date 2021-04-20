var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.post('/', function(req, res) {
  for (key in req.body) {
    console.log(key, '=', req.body[key]);
  }
  res.end();
});
app.listen(1337);
