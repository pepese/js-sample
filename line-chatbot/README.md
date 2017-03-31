LINEチャットボット サンプルアプリ
===

# 使い方

## 実行方法

```bash
$ npm start
```

```https``` でWebサーバか何かを立てて、 ```http://[FQDN]:3000/``` へプロキシさせる。  
その後、LINEアカウントの **Messaging API** へ上記のWebサーバのエンドポントを *Webhook URL* として登録する。

## 設定

```config/config.json``` のLINEに関係するトークンなどを設定してから使う

# 作成手順メモ

```bash
$ express express-sample --view=pug --git
$ cd line-chatbot && npm install
$ npm install request crypto --save
$ mkdir config
$ touch config/config.json
```
