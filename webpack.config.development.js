const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
});

for (const key in config.entry) {
  if (config.entry.hasOwnProperty(key)) {
    config.entry[key].unshift('webpack/hot/dev-server');
    config.entry[key].unshift('webpack-hot-middleware/client');
  }
}

config.module.rules.push(
    {
      test: /\.(sass|scss)$/,
      use: [
        'css-hot-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [path.resolve('./node_modules/')]
          }
        },
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    },
    {
      test: /\.pug$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: file => {
              const filePath = path.dirname(file);
              const dirNameInsideAssets = path.relative(path.join(__dirname, 'src/pug'), filePath);
              return dirNameInsideAssets === '' ?  '[name].html' : `${dirNameInsideAssets}/[name].html`;
            },
            outputPath: ''
          }
        },
        'extract-loader',
        {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', ':data-src']
          }
        },
        {
          loader: 'pug-html-loader',
          options: {
            pretty: true,
            filters: {
              'cdata': (text) => '<![CDATA[' + text + ']]>',
              'comment': (text) => '<!--' + text + '-->',
            }
          }
        }
      ]
    },
    {
      test: /\.(jpg|png|webp|gif|svg|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: file => {
              const filePath = path.dirname(file)
              let dirNameInsideAssets = path.relative(path.join(__dirname, 'src'), filePath);
              dirNameInsideAssets = dirNameInsideAssets.replace('../node_modules', 'static');
              return `${dirNameInsideAssets}/[name].[ext]`;
            },
            outputPath: ''
          }
        }
      ],
    }
  );


module.exports = config;
