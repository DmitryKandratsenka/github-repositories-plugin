/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const common = require('./webpack.common');

const BUILD_DIR = path.resolve(__dirname, './build');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(ts|js)x?$/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
      }),
    ],
  },
  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    filename: 'js/[name].[contenthash].bundle.js',
    path: BUILD_DIR,
    sourceMapFilename: 'js/[name].[contenthash].bundle.map',
  },
  plugins: [
    new WebpackManifestPlugin({
      seed: {
        background_color: 'hsl(0, 0%, 98%)',
        display: 'standalone',
        icons: [
          {
            sizes: '16x16',
            src: 'favicon.ico',
            type: 'image/x-icon',
          },
        ],
        name: 'Find your country',
        short_name: 'FYC',
        start_url: '.',
        theme_color: 'hsl(0, 0%, 98%)',
      },
    }),
  ],
});
