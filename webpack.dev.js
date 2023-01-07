/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

const BUILD_DIR = path.resolve(__dirname, './build');
const ASSETS_DIR = path.resolve(__dirname, './assets');

module.exports = merge(common, {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8081,
    static: [
      {
        directory: BUILD_DIR,
        watch: true,
      },
      {
        directory: ASSETS_DIR,
        watch: true,
      },
    ],
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      REACT_APP_DEVELOPMENT: true,
    }),
  ]
});
