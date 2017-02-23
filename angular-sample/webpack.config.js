// module.exports = require('./config/webpack.dev.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /* ビルドの起点となるファイルの設定 */
  entry: [
    `./src/main.ts`
  ],
  /* 出力されるファイルの設定 */
  output: {
    path: __dirname + '/dist', // 出力先のパス
    filename: 'main.js' // 出力先のファイル名
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  /* ソースマップをファイル内に出力させる場合は以下を追加 */
  //devtool: 'source-map',
  module: {
    /* loaderの設定 */
    loaders: [
      {
        test: /\.ts$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: 'awesome-typescript-loader' // 使用するloader
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist'
  },

  plugins: [

      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        __dirname
      ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
