import dispatch from 'redux';
import store from '../../store';

function selected(state={}, action){
    switch (action.type){
        case 'SELECT':
            return Object.assign({}, state, { selected: action.payload });

        default:
            return state;
    }
}

export default selected;