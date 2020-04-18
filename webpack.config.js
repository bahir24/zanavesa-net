const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('node-sass');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: './js/bundle.js',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
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
        test: /\.(woff2?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              sourceMap: true,
            },
          }
        ],  
      }, {
        test: /\.(jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          }
        ],
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
      filename: './index.html'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    filename: 'bundle.js',
    overlay: {
      warnings: true,
      errors: true
    }
  }
};