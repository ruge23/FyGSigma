import dispatch from 'redux';
import { cargarInfo } from '../actions/actionCreator';
import store from '../../store';

function mapReducer(state={}, action) {
  switch(action.type){

    case 'MODIFICAR_MAP':
    console.log('STATE:', state);
    console.log('ACTION:', action);
      return Object.assign({}, state, { mapHistory: [ ...state.mapHistory, action.historial ]});

    case 'VOLVER_MAP':
      return Object.assign({}, state, { mapHistory: state.mapHistory.slice(0, state.mapHistory.length - 1)});

    case 'CARGAR_INFO':
      const regiones = {regiones: action.info};
      return Object.assign({}, state, { mapInfo: regiones });

    default:
      return state;
  }
}

export default mapReducer;
