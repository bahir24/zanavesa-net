const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const sass = require('node-sass');

const commonDev = {
  entry: path.resolve(__dirname, './src/main.js'),
  module: {
    rules: [

      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
          plugins: ["@babel/plugin-syntax-dynamic-import"]
        }
      },{
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },{
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
  ],
  devtool: "#eval-source-map"
};

const devConf = {
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    stats: 'verbose',
    filename: 'bundle.js',
    clientLogLevel: 'debug',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: 'google-chrome'
  },
};

module.exports = (env) => {
  if (env === 'development') {

    return Object.assign(
      {},
      commonDev,
      devConf,
    );
  } else {
    return Object.assign(
      {},
      commonDev,
      devConf,
      prodConf
    );
  }
};