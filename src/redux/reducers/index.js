import { combineReducers } from 'redux';
import dataMap from './modificarMap';
import tanques from './tanque'
import selected from './selected';

const rootReducer = combineReducers({dataMap, tanques, selected});

export default rootReducer;
