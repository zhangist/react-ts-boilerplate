const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const package = require("./package.json");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
const isDev = process.env.NODE_ENV === "development" ? true : false;

const entry = {};
const plugins = [];

entry.main = ["./src/index.tsx"];
plugins.push(
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(package.version),
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  }),
);
plugins.push(
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html",
    favicon: "./src/favicon.ico",
  }),
);
plugins.push(new CopyWebpackPlugin([{ from: "src/i18n", to: "i18n" }]));

// webpack dev server
if (isDev) {
  entry.main.unshift("webpack-dev-server/client?http://localhost:9000/");
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

// webpack analyzer
if (process.env.analyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

const config = {
  mode: process.env.NODE_ENV,
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
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "awesome-typescript-loader"],
        exclude: /node_modules/,
      },
    ],
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
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
    port: 9000,
    hot: true,
  },
};

module.exports = config;
