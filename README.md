# webpack-startup

## create a directory, initialize npm
```
mkdir webpack-startup && cd webpack-startup

npm init -y
```
## install babel and webpack locally
```
npm install --save-dev babel-loader babel-core babel-preset-env webpack
```
## .babelrc

```
{
  "presets": ["env"]
}
```

## webpack.config.js

```
'use strict';

const path = require('path');
const webpack = require('webpack');
 
module.exports =  {
  entry: '[name].js',
  output: { path: __dirname, filename: 'bundle.js' },
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
```
## create bundle
```
npm run build
```
