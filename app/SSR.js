import { match } from 'react-router';

import routes from './routes';
import store from './store';
// import App from './components/App';
import { fetchDummyUsers } from './api/dummy';


export default (req, res) => {
  route(req, res, props => store(res, props) );
};

export const loadDummyUser = (req, res) => {
  route(req, res, props => {
    fetchDummyUsers( (result) => {
      let initialState = { dummy: result };
      store(res, props, initialState);
    });
  });
};




const route = ( req, res, callback ) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      callback(props);
    } else {
      res.status(404).send('Not Found');
    }
  });
};
