import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mapReducer from './redux/reducers/modificarMap';
//importo los datos que vamos a usar por defecto
import locaciones from './data/locaciones';
import regiones from './data/regiones'
import tanques from './data/tanques'

// creo un Objeto con el stado por defecto
const defaultState = {
  dataMap: {
    mapInfo: {
      locaciones,
      regiones,
      tanques,
    },
    mapState: {
      regiones: [],
      locaciones: [],
      tanques: [],
      zoom: 10,
      center: {}
    }
  }
}
// plugin de development
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)


// creo el store
const store = createStore(mapReducer, defaultState, enhancers);

export default store;
