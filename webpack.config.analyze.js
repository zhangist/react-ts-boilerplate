const  BundleAnalyzerPlugin  =  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
process.env.NODE_ENV = 'production';
process.env.ANALYZE = true;

const webpackConfig = require('./webpack.config');

webpackConfig.plugins = [new  BundleAnalyzerPlugin()]
module.exports = webpackConfig;