'use strict';

const debug = process.env.NODE_ENV !== 'production';
console.log('debug: ' , debug);
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './client.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          // Note: react-html-attrs allows use of typical html attribute names like 'class' instead of 'className'
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + '/app/public/js',
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
