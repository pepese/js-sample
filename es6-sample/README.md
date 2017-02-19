webpack + Babel6 でブラウザで動く最低限のアプリ作った。  
動作確認したライブラリのバージョンは以下（package.json）。

```js
{
  "name": "es6-sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --progress --colors"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-polyfill": "^6.20.0",
    "babel-preset-env": "^1.1.6",
    "babel-preset-es2015": "^6.18.0",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
  }
}
```

# 構築手順

```sh
$ mkdir es6-sample
$ cd es6-sample
$ npm init -y
$ npm install --save-dev \
      webpack \
      babel-cli \
      babel-core \
      babel-preset-env \
      babel-preset-es2015 \
      babel-polyfill \
      babel-loader \
      webpack-dev-server
$ mkdir src; touch src/app.js
$ mkdir dist; touch dist/index.html
$ touch webpack.config.js
$ touch .babelrc
```

トランスパイル及びWebサーバ起動は以下。

```sh
$ npm run build
$ npm run start
```

「http://localhost:8080/webpack-dev-server/」へアクセスする。  
トランスパイル後のディレクトリ構造は以下のようになる。

```
$ tree -a -I 'node_modules'
.
├── .babelrc
├── dist
│   ├── app.bundle.js
│   ├── app.bundle.js.map
│   └── index.html
├── package.json
├── src
│   └── app.js
└── webpack.config.js
```
