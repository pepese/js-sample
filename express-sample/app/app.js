const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const fs = require('fs');
const FileStreamRotator = require('file-stream-rotator');
const util = require('util');

// 環境差分ファイル
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, 'config', 'config.json'))[env];

/**
 * APIルーティング先のロード
 */
//const api_router = require('./api/router');

/**
 * Viewのルーティング先のロード
 */
const controllers_router = require('./controllers/router');

/**
 * express本体の作成
 */
const app = express();

/**
 * ログの設定
 */
// ログディレクトリの定義
const logDirectory = __dirname + '/log';
// ディレクトリがなければ作成する
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// dailyローテーションの設定でアクセスログのwrite streamを作成
const accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false,
  date_format: "YYYY-MM-DD"
});
// dailyローテーションの設定でコンソールログのwrite streamを作成
const consoleLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/console-%DATE%.log',
  frequency: 'daily',
  verbose: false,
  date_format: "YYYY-MM-DD"
});
// console.logの出力をconsoleLogStreamへ流す
console.log = (d) => {
  consoleLogStream.write(util.format(d) + '\n');
}

/**
 * Viewエンジンの設定
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * サードパーティミドルウェア
 */
// 「/public」 に favicon を置いてからコメント解除
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// JSONボディパーサ
// app.use(bodyParser.json());
// ボディのURLエンコード
app.use(bodyParser.urlencoded({ extended: false }));
// ロガー（アクセスログ）、上記「ログの設定」と関係
app.use(logger('combined', {stream: accessLogStream}));
// cookieパーサ
app.use(cookieParser());
// SASSトランスパイル
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

/**
 * ビルドインミドルウェア
 */
// 静的コンテンツのパスを指定
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '../dist')));

/**
 * APIルーティング
 */
// app.use('/api', api_router);
// 上記のルーティングにマッチしなかった場合はindex.htmlを返す
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..dist/index.html'));
// });

/**
 * VIEWルーティング
 */
app.use('/', controllers_router);
// 上記のルーティングにマッチしなかった場合はエラー処理ミドルウェアに処理を流す
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * エラー処理ミドルウェア
 */
// Viewの場合のエラー処理
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

/**
 * ポートの設定
 */
const port = process.env.PORT || config.port || '3000';
app.set('port', port);

module.exports = app;

/**
 * HTTP server作成
 */
if(!module.parent){
  const server = http.createServer(app);
  // listenポートを指定してHTTP serverを起動
  server.listen(port, () => console.log(`API running on localhost:${port}`));
}
