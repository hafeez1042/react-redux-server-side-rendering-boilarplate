import { RoutingContext, match } from 'react-router';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import Promise from 'bluebird';
import Express from 'express';
import React from 'react';
import { Provider } from 'react-redux';

const server = new Express();

server.get('*', (req, res)=> {
  const history = createMemoryHistory();
  const store = configureStore();

  const routes = crateRoutes(history);

  const location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.send(500, error.message);
    } else if (renderProps === null) {
      res.send(404, 'Not found');
    } else {
      // const [ getCurrentUrl, unsubscribe ] = subscribeUrl();
      // const reqUrl = location.pathname + location.search;

      getReduxPromise().then(()=> {
        const reduxState = escape(JSON.stringify(store.getState()));
        const html = ReactDOMServer.renderToString(
          <Provider store={store}>
            { <RoutingContext {...renderProps}/> }
          </Provider>

        );
        res.render('index', { html, reduxState });
      });

      const getReduxPromise = () => {
        const { query, params } = renderProps;
        const comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
        const promise = comp.fetchData ?
          comp.fetchData({ query, params, store, history }) :
          Promise.resolve();

        return promise;
      };
    }
  });
});
