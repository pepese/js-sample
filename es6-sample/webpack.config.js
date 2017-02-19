module.exports = {
  /* ビルドの起点となるファイルの設定 */
  entry: [
    'babel-polyfill',
    `./src/app.js`
  ],
  /* 出力されるファイルの設定 */
  output: {
    path: __dirname + '/dist', // 出力先のパス
    filename: 'app.bundle.js' // 出力先のファイル名
  },
  /* ソースマップをファイル内に出力させる場合は以下を追加 */
  devtool: 'source-map',
  module: {
    /* loaderの設定 */
    loaders: [
      {
        test: /\.js$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: 'babel-loader' // 使用するloader
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist'
  }
};
