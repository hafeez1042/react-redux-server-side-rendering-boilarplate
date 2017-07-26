
const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
require('jquery');

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  devtool: 'eval',
  name: 'client',
  context: path.join(__dirname, '..', 'app'),  
  entry: [
      'bootstrap-loader',
      'webpack-hot-middleware/client',
      './client.js',
  ],
  output: {
    path: assetsPath,
    publicPath,
    filename: 'bundle.js',
  },
  module: {
    rules: commonLoaders.concat([
      {
        test: /\.css$/,
        // loaders: [
        //   'style',
        //   'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
        //   'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
        // ],
        exclude: /node_modules/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                }
            },
            {
                loader: 'postcss-loader'
            }
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "postcss-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      }
    ]),
  },
  plugins: [
    extractSass,
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({ 
        jQuery: 'jquery',
        $: 'jquery',
    })

    // new BundleAnalyzerPlugin()
  ],

};