'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/modules/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/modules'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
