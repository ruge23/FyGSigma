import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import Main from './containers/Main.jsx';
import Map from './containers/Map.jsx';
import store from './store';

const router = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path ='/'>
        <Route path='/home' component = { Map }></Route>
        <IndexRedirect to='/home' />
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('map'));
