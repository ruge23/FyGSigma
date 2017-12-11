function mapReducer(state={}, action) {
  switch(action.type){
    case 'MODIFICAR_MAP':
      return Object.assign({}, state, { mapState: action.mapData });
    case 'VOLVER':
      return state
    case 'CARGAR_INFO':
      return Object.assign({}, state, { mapInfo: action.info });
    default:
      return state;
  }
}

export default mapReducer;
