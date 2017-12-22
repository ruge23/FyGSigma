import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import Main from './containers/Main/Main.jsx';
import Login from './containers/Login.jsx';
import Map from './containers/Main/Map.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import TanqueContainer from "./containers/TanqueComponents/TanqueContainer";

const router = (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path ='/'>
          <Route path='/login' component= { Login }/>
          <Route path='/home' component = { Main }/>
          <Route path='/tanque/:idTanque' component = { TanqueContainer }/>
          <IndexRedirect to='/login' />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);


render(router, document.getElementById('app'));
