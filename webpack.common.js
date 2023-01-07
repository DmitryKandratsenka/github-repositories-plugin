/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, './src');
const ASSETS_DIR = path.resolve(__dirname, './assets');
const TEST_DIR = path.resolve(__dirname, './test');

require('dotenv').config({ path: './.env' });
require('dotenv').config({ path: './.env.local' });

module.exports = {
  entry: {
    bundle: `${APP_DIR}/index.tsx`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg|ico|txt)$/i,
        type: 'asset/resource',
      },
      {
        generator: {
          filename: './fonts/[name][ext]',
        },
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      favicon: `${ASSETS_DIR}/favicon.ico`,
      minify: false,
      template: './public/index.html',
    }),

    new CopyPlugin({
      patterns: [
        { from: '.env', noErrorOnMissing: true, to: '' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': APP_DIR,
      assets: ASSETS_DIR,
      test: TEST_DIR,
    },
    extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
  },
  target: 'web',
};
