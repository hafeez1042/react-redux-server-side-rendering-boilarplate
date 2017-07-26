const path = require('path');

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.join(__dirname, '..', 'dist', 'assets'),
  commonLoaders: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
    }
  ],
};