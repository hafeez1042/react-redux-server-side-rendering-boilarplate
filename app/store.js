import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './reducers';
import template from './template';

export default (res, props, initialState = {}) => {
  // `RouterContext` is what the `Router` renders. `Router` keeps these
  // `props` in its state as it listens to `browserHistory`. But on the
  // server our app is stateless, so we need to use `match` to
  // get these props before rendering.
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  const appHtml = renderToString(
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // dump the HTML into a template, lots of ways to do this, but none are
  // really influenced by React Router, so we're just using a little
  // function, `renderPage`
  // res.send(renderPage(appHtml))
  res.send(template(appHtml, preloadedState));
  // res.send(template({
  //   body: appHtml,
  //   title: 'FROM THE SERVER',
  // }));
};
