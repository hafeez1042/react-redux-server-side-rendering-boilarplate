import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Test1 from './components/Test/Test1';
import Test2 from './components/Test/Test2';
import NoMatch from './components/NoMatch/NoMatch';
import App from './components/App/App';

module.exports = () => {
  return (
    <App>
      <Switch>
        <Route path="/" exact key="home" component={Home} />
        <Route path="/test1" key="test1" component={Test1} />
        <Route path="/test2" component={Test2} />
        <Route component={NoMatch}/>
      </Switch>
    </App>
  );
};
