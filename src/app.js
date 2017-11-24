import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Main from './containers/Main.jsx';


const router = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}></Route>
  </Router>
)


render(router, document.getElementById('app'));
