'use strict';

const path = require('path');
const webpack = require('webpack');
 
module.exports =  {
  entry: './src/index.js',
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env']
        }
      }
    ]
  },
};

