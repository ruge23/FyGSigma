import axios from 'axios';

// modificar Map
export function moficarMap(mapData){
  return {
    type:'MODIFICAR_MAP',
    mapData,
  }
}
//volver para atras
export function volver(){
  return {
    type:'VOLVER',
  }
}
//cargar info del mapa en el stado
export function cargarInfo(info) {
  return {
    type: 'CARGAR_INFO',
    info,
  }
}

//pedir stado del mapa (thunk)
export function getMapInfo(){
    return (dispatch) => {
      axios.get('http://url')
      .then(respuesta => dispatch(cargarInfo(respuesta.data)))
    }
}
