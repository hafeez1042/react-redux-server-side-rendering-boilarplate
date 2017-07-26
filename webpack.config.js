const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'SSR',
  entry: './src/SSR.js',
  output: {
    path: path.join(__dirname, '.', 'dist', 'assets'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/',
  },
  target: 'node',
  externals: nodeExternals(),  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};