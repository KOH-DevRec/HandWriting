/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var http = require("http")
var app = express();
var bodyParser = require('body-parser');
var shelljs = require("shelljs");
//画像保存場所指定
app.use(express.static('img'));
app.use(bodyParser.urlencoded({extended:true}));
/* 2. listen()メソッドを実行1337番ポートで待ち受け。*/
var server = app.listen(1337, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// View EngineにEJSを指定。
app.set('view engine', 'ejs');
// fsモジュールを読み込み
var fs = require('fs');

app.all("/", function(req, res, next){
    console.log("root-get");
    //console.log(req);
    res.render('index.ejs', { fs: fs});
});

app.get("/login", function(req, res, next){
    console.log("login-get");
    //console.log(req);
    
    res.render('login.ejs', { fs: fs});
});

app.get("/dataset", function(req, res, next){
    console.log("dataset-get");
    //postされたnameをlocalの変数に格納
    var name_id = String(req.query.name);
    var moji_id = 0;
    try{
      moji_id  = Number(fs.readFileSync("./userprofile"+"/"+name_id+".txt", 'utf8'));
    }catch(e){
      moji_id = -1;
    }
    if(moji_id == -1){
	    shelljs.cp('-r','./csv/sample/','./csv/'+name_id+'/');
	    moji_id = 1;
	    fs.writeFile("./userprofile/"+name_id+".txt",moji_id,function(err, result) {
                if(err) console.log('error', err);
            });
	    console.log("create folder"+name_id);
    }
    hiragana_dataset_csv = fs.readFileSync("./userprofile/Hiragana_dataset.csv", 'utf8');
    var input_hiragana = hiragana_dataset_csv.split(",");
    res.render('dataset.ejs', { moji_id:moji_id,fs: fs ,name_id:name_id,hiragana:input_hiragana[moji_id+(moji_id-1)*2],hiragana_kaku:input_hiragana[moji_id+(moji_id-1)*2+1]});
});
app.post("/dataset", function(req, res) {
    console.log("dataset-post");
    var moji = req.body.hiragana;
    var csv = req.body.csv;
    var name_id = req.body.name_id;
    var moji_id = Number(req.body.moji_id);
    var i = 0;
    var count =0;
    var csv_length = csv.length;
    var createcount = 0;
    try {
	     createcount = Number(fs.readFileSync("./csv"+"/"+name_id+"/"+moji+"/count.txt", 'utf8'));
    }
    catch (e) {
	     createcount =1;
    }
    if(csv_length<10){
   	 for(i = 0;i < csv_length; i++){
           console.log(i);
           count++;
	   console.log(name_id,moji,createcount,count);
           fs.writeFile("./csv/"+name_id+"/"+moji+"/"+moji+"_"+createcount+"_"+count+".csv",csv[i],function(err, result) {
     		if(err) console.log('error', err);
   	   });
         }
    }else{
	     count++;
	     fs.writeFile("./csv/"+name_id+"/"+moji+"/"+moji+"_"+createcount+"_"+count+".csv",csv,function(err, result) {
                if(err) console.log('error', err);
            });
    }
    createcount++;
    fs.writeFile("./csv"+"/"+name_id+"/"+moji+"/count.txt",createcount,function(err, result) {
                if(err) console.log('error', err);
           });
    moji_id ++;
    console.log("finish");
    if (moji_id <=46) {
      fs.writeFile("./userprofile/"+name_id+".txt",moji_id,function(err, result) {
                if(err) console.log('error', err);
      });
      var hiragana_dataset_csv = fs.readFileSync("./userprofile/Hiragana_dataset.csv", 'utf8');
      var input_hiragana = hiragana_dataset_csv.split(",");
      res.render('dataset.ejs', { moji_id:moji_id,fs: fs ,name_id:name_id,hiragana:input_hiragana[moji_id+(moji_id-1)*2],hiragana_kaku:input_hiragana[moji_id+(moji_id-1)*2+1]});
    } else {
      fs.writeFile("./userprofile/"+name_id+".txt",1,function(err, result) {
                if(err) console.log('error', err);
           });
      res.render('index.ejs', { fs: fs });
    }
});

app.all("/user_font", function(req, res, next){
    console.log("root-get");
    //console.log(req);
    res.render('index.ejs', { fs: fs});
});
