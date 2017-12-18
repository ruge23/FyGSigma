import dispatch from 'redux';
import store from '../../store';

function tanqueReducer(state={}, action){
    switch (action.type){
        case 'CARGAR_TANQUE':
           return Object.assign({}, state, { selected: action.tanque });

        default:
            return state;
    }
}

export default tanqueReducer;