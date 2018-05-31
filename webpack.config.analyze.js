process.env.NODE_ENV = 'production';
process.env.ANALYZE = true;

const webpackConfig = require('./webpack.config');

module.exports = webpackConfig;
