const path = require('path');
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.config.base.js');
const config = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
});

config.module.rules.push(
    {
      test: /\.(sass|scss)$/,
      use: [
        // CSSをextractする
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            // 0 => no loaders (default);
            // 1 => postcss-loader;
            // 2 => postcss-loader, sass-loader
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
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
              return `${dirNameInsideAssets}/[name].html`;
            },
            outputPath: '/'
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
              const filePath = path.dirname(file);
              let dirNameInsideAssets = path.relative(path.join(__dirname, 'src'), filePath);
              dirNameInsideAssets = dirNameInsideAssets.replace('../node_modules', 'static');
              return `${dirNameInsideAssets}/[name].[ext]`;
            },
            outputPath: '/'
          }
        }
      ]
    }
  );

module.exports = config;
