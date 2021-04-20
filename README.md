# HandWriting

## start project
### vagrant⇨node.jsを使ったサーバ構築
PCに仮想環境を構築しその仮想環境上でサーバを構築する方法
```bash.sh
$ vagrant box add {name} {url}
$ vagrant up {name}
$ vagrant ssh
```

### node.jsのみを使ったサーバ構築(推奨) 
#### windows
https://qiita.com/maecho/items/ae71da38c88418b806ff  

#### mac
https://qiita.com/akakuro43/items/600e7e4695588ab2958d  

# webサーバ起動
```
$ cd nodejs/sample5/
$ node app.js
``` 
node　app.jsでapp.jsが起動します  
app.jsにはgetメソッドpostメソッドに関する内容が書かれていています.  
該当のHTML(ejs)が呼ばれwebアプリとして機能します。
