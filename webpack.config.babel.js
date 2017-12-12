import path from 'path'

import CopyWebpackPlugin from 'copy-webpack-plugin'
import ZipPlugin from 'zip-webpack-plugin'

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      { test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './chrome/manifest.json', to: '.' },
      {from: './public/inject.js', to: '.' },
      {from: './public/icons', to: './icons' },
    ], {copyUnmodified: true}),
    new ZipPlugin({
      filename: 'extension.zip'
    })
  ]
}
