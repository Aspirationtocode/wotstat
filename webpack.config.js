const path = require('path');
const webpack = require('webpack');
const CssSourcemapPlugin = require('css-sourcemaps-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const browsers = require('./package').browsers;

const autoprefixerBrowsers = [
  `Android >= ${browsers.android}`,
  `Chrome >= ${browsers.chrome}`,
  `Firefox >= ${browsers.firefox}`,
  `Explorer >= ${browsers.ie}`,
  `iOS >= ${browsers.ios}`,
  `Opera >= ${browsers.opera}`,
  `Safari >= ${browsers.safari}`,
].map(browser => `"${browser}"`);

const autoprefixerLoader = `autoprefixer-loader?{browsers:[${autoprefixerBrowsers}]}`;
const cssLoaders = ['style-loader', 'css-loader', autoprefixerLoader, 'stylus-loader'];

const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');

const isProd = process.env.NODE_ENV === 'production';

const devCss = cssLoaders;
const prodCss = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: cssLoaders.slice(1),
});

const configCss = isProd ? prodCss : devCss;
const sourcemap = isProd ? false : 'source-map';

module.exports = {
  context: src,
  entry: './scripts/index.js',
  output: {
    path: dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: configCss,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=images/',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=fonts/',
      },
      {
        test: /manifest.json$/,
        use: 'file-loader?name=manifest.json',
      },
    ],
  },
  devtool: sourcemap,
  devServer: {
    contentBase: dist,
    compress: true,
    hot: true,
    port: 3000,
    stats: 'errors-only',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: isProd,
      allChunks: true,
    }),
    new CssSourcemapPlugin({ disable: isProd }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
