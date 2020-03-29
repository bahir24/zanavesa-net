const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
    './src/main.scss',
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/'),
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }],
        })
      }, {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }, {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.pug',
  }),
  new ExtractTextPlugin({
    filename: './style.bundle.css',
    allChunks: true,
  }),
  ],
  devServer: {
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    },
    open: 'google-chrome'
  }
};