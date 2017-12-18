import axios from 'axios';

const ROOT_URL = '54.234.124.9:3000/api';

//Buscar areas del api
export function fetchAreas() {
    const req =  axios.get(`http://54.234.124.9:3000/api/areas`);

    return {
        type: 'FETCH_AREAS',
        payload: req
    }
}

//agregar al historial
export function addToHistory(historial){
  return {
    type:'MODIFICAR_MAP',
    historial,
  }
}

//volver para atras
export function volver(){
  return {
    type:'VOLVER_MAP',
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
