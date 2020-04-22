const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('node-sass');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: './index.js',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        },
      }, {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.(woff2?|jpe?g|png)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
          },
        },
      }, {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ["pug-plain-loader"]
          },
          {
            use: ["pug-loader"]
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: './index.html'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    filename: 'bundle.js',
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};