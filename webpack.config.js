const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require('./package.json');

const isDev = process.env.NODE_ENV === "development" ? true : false;
const NODE_ENV = isDev ? "development" : "production";

const entry = {};
const plugins = [];

entry.app = ["./src/main.tsx"];
plugins.push(
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(package.version),
    "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
  })
);
plugins.push(
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html",
  })
);

if (isDev) {
  entry.app.unshift("webpack-dev-server/client?http://localhost:9000/");
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

const config = {
  mode: NODE_ENV,
  target: "web",
  context: __dirname,
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name]-[hash].js",
    chunkFilename: "[name]-[chunkhash].js",
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loaders: ["babel-loader", "awesome-typescript-loader"],
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: plugins,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all",
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
};

module.exports = config;
