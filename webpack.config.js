const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV === "production" ? false : true;

module.exports = {
  mode: isDev ? "development" : "production",
  target: "web",
  context: __dirname,
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000,
  },
};
