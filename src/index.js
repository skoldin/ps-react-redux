import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// we could pass initial state in, e.g. for server rendering. This will override the default parameters passed in from reducers
const store = configureStore();
store.dispatch( loadCourses() );
store.dispatch( loadAuthors() );

// provider wraps our entire application so it can be connected to our redux store. Then we will be able to access
// the store in our components
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);