const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devServer = {
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    port: 9000,
    stats: 'verbose',
    filename: 'bundle.js',
    clientLogLevel: 'debug',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

const loaders = {
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: "css-loader",
          options: {
            sourceMap: true,
            url: false
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }],
      }, {
        test: /\.js$/,
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
  }
};

const plugins = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),    
  ],
};


module.exports = (env) => {
  devtool = "source-map";
  entry = [
    './src/index.js',
    './src/main.scss',
  ];
  output = [
    './js/bundle.js',
    './css/css.bundle.js',
  ];
  if (env === 'development') {
    return Object.assign(
      {},
      devServer,
      loaders,
    );
  } else {
    return Object.assign(
      {},
      plugins,
      loaders
    );
  }
};