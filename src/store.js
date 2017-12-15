import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './redux/reducers';
//importo los datos que vamos a usar por defecto
import locaciones from './data/locaciones';
import regiones from './data/regiones'
import tanques from './data/tanques'

// creo un Objeto con el stado por defecto
const defaultState = {
  dataMap: {
    mapInfo: {
      locaciones,
      tanques,
    },
    mapHistory: []
  }
}
// plugin de development
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)


// creo el store
const store = createStore(rootReducer, defaultState, enhancers);

export default store;
