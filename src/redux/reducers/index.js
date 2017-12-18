import { combineReducers } from 'redux';
import dataMap from './modificarMap';
import tanques from './tanque'

const rootReducer = combineReducers({dataMap, tanques});

export default rootReducer;
