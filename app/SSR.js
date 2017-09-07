import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';

import App from './routes';

import reducers from './reducers';
import template from './template';

export default (req, res) => {
  const context = {};
  const initialState = {};
  // `RouterContext` is what the `Router` renders. `Router` keeps these
  // `props` in its state as it listens to `browserHistory`. But on the
  // server our app is stateless, so we need to use `match` to
  // get these props before rendering.
  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  const appHtml = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App/>
      </StaticRouter>
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // dump the HTML into a template, lots of ways to do this, but none are
  // really influenced by React Router, so we're just using a little
  // function, `renderPage`
  // res.send(renderPage(appHtml))
  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.send(template(appHtml, preloadedState));
  }
  // res.send(template({
  //   body: appHtml,
  //   title: 'FROM THE SERVER',
  // }));
};
