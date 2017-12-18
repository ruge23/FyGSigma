import dispatch from 'redux';
import { cargarInfo } from '../actions/actionCreator';
import store from '../../store';

function mapReducer(state={}, action) {
  switch(action.type){

    case 'FETCH_AREAS':
     const fetch = action.payload.then(response => {
          const regiones = {
              regiones: response.data
          };
         store.dispatch(cargarInfo(regiones));

     });

    case 'MODIFICAR_MAP':
    console.log('STATE:', state);
    console.log('ACTION:', action);
      return Object.assign({}, state, { mapHistory: [ ...state.mapHistory, action.historial ]});

    case 'VOLVER_MAP':
      return Object.assign({}, state, { mapHistory: state.mapHistory.slice(0, state.mapHistory.length - 1)});

    case 'CARGAR_INFO':
      console.log( Object.assign({}, state, { mapInfo: action.info }));
      return Object.assign({}, state, { mapInfo: action.info });

    default:
      return state;
  }
}

export default mapReducer;
