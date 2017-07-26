import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home/Home';
import Test1 from './components/Test/Test1';
import Test2 from './components/Test/Test2';
import App from './components/App/App';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/test1" key="test1" component={Test1} />
    <Route path="/test2" component={Test2} />
    {/* <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route> */}
    {/* <Route path="/about" component={About}/> */}
  </Route>
);
