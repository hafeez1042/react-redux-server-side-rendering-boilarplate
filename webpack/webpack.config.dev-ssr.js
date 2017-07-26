
const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  name: 'SSR',
  context: path.join(__dirname, '..', 'app'),
  entry: [
      './SSR.js'
  ],
  output: {
    path: assetsPath,
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  target: 'node',
  externals: nodeExternals(),  
  module: {
    rules: commonLoaders.concat([
      {
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
    
  ],

};