const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: [path.resolve(__dirname, './src/javascripts/entry.js')],
    styleguide: [path.resolve(__dirname, './src/javascripts/styleguide.js')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '../flags': path.resolve(__dirname, "node_modules/flag-icons/flags")
    },

    // alias: {
    //   static: path.resolve(__dirname, 'src/static'),
    //   components: path.resolve(__dirname, 'src/pug/components')
    // }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/javascripts/routs.json", to: "./js/routs.json" },
        { from: "./src/favicon/" },
        { from: "./src/static/", to: "./static/" },
        { from: "./src/html/", to: "./html/" },
      ],
    })
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // })
  ]
};
