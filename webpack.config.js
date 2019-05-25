const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

process.env.NODE_ENV = process.env.NODE_ENV || "production";

const config = {
  mode: process.env.NODE_ENV,
  target: "web",
  context: __dirname,
  entry: {
    main: ["./src/Root.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename:
      process.env.NODE_ENV === "production" ? "[name]-[hash].js" : "[name].js",
    chunkFilename:
      process.env.NODE_ENV === "production"
        ? "[name]-[chunkhash].js"
        : "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "awesome-typescript-loader"],
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "src/i18n")],
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => {
                const plugins = [
                  require("postcss-import")({ root: loader.resourcePath }),
                  require("autoprefixer")(),
                ];
                if (process.env.NODE_ENV === "production") {
                  plugins.push(require("cssnano")());
                }
                return plugins;
              },
            },
          },
          "less-loader",
        ],
        exclude: [path.resolve(__dirname, "node_modules")],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", ".less"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
    }),
    new CopyWebpackPlugin([{ from: "src/i18n", to: "i18n" }]),
  ],
  optimization: {
    runtimeChunk: true,
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

// webpack dev server
if (process.env.NODE_ENV !== "production") {
  config.entry.main.unshift("webpack-dev-server/client?http://localhost:9000/");
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

// webpack analyzer
if (process.env.analyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
