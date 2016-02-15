
var webpack = require('webpack')
    extractTextPlugin = require('extract-text-webpack-plugin')

// webpack.config.js
module.exports = {
  entry: './entry.jsx',

  output: {
    filename: 'bundle.js',
    path: './',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.scss$/, loader: extractTextPlugin.extract('css!autoprefixer-loader!sass'), exclude: /node_modules/},
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new extractTextPlugin('style.css', {
            allChunks: true
        })
  ]

}
