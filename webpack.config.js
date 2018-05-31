const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PACKAGE = require('./package.json');

const isDev = process.env.NODE_ENV === "development" ? true : false;
const NODE_ENV = isDev ? "development" : "production";

const config = {
  mode: NODE_ENV,
  target: "web",
  context: __dirname,
  entry: {
    app: ["./src/main.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash].bundle.js",
    chunkFilename: "[name]-[chunkhash].chunk.js",
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loaders: ["babel-loader", "awesome-typescript-loader"],
      exclude: /node_modules/,
    }, ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(PACKAGE.version),
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};

if (isDev) {
  config.entry.app.unshift("webpack-dev-server/client?http://localhost:9000/");
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.devServer = {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000,
    hot: true,
  };
}

module.exports = config;
