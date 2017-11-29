import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Main from './containers/Main.jsx';
import Map from './containers/Map.jsx';

const router = (
  <Router history={hashHistory}>
    <Route path ='/'>
      <Route path='/home' component = { Map }></Route>
      <IndexRedirect to='/home' />
    </Route>
  </Router>
)


render(router, document.getElementById('map'));
