const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.dev-client');

const render = require('../dist/assets/SSR');

const app = express();
const port = 3000;

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/test1', render.loadDummyUser);
app.get('*', render.default);


app.listen(port);
console.log(`Listening on port ${port}`);