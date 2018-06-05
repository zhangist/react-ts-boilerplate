const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfig = require('./webpack.config');

webpackConfig.plugins.push(new BundleAnalyzerPlugin({}));

module.exports = webpackConfig;
