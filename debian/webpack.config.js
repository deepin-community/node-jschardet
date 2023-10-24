'use strict';
var path = require('path');
var config = {
  mode: 'development',
  target: 'web',
  resolve: {
    modules: ['/usr/lib/nodejs', '.'],
  },
  resolveLoader: {
    modules: ['/usr/lib/nodejs'],
  },
  output: {
    libraryTarget: 'umd'
  }
}
module.exports = config;
