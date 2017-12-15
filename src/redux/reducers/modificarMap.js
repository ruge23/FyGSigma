function mapReducer(state={}, action) {
  switch(action.type){

    case 'FETCH_AREAS':
      let regiones;
      return action.payload.then(res => {
          regiones = res.data;
          console.log(regiones);
          return Object.assign({}, state, { mapInfo: { regiones: regiones }});
      });


    case 'MODIFICAR_MAP':
    console.log('STATE:', state);
    console.log('ACTION:', action);
      return Object.assign({}, state, { mapHistory: [ ...state.mapHistory, action.historial ]});

    case 'VOLVER':
      return Object.assign({}, state, { mapHistory: state.mapHistory.slice(0, state.mapHistory.length - 1)});

    case 'CARGAR_INFO':
      return Object.assign({}, state, { mapInfo: action.info });

    default:
      return state;
  }
}

export default mapReducer;
