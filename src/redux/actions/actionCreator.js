import axios from 'axios';

const ROOT_URL = 'http://54.234.124.9:3000/api';

//agregar al historial
    export function addToHistory(historial) {
        return {
            type: 'MODIFICAR_MAP',
            historial,
        }
    }

//volver para atras
    export function volver() {
        return {
            type: 'VOLVER_MAP',
        }
    }

//cargar info del mapa en el stado
    export function cargarInfo(info) {
        return {
            type: 'CARGAR_INFO',
            info,
        }
    }

    export function cargarTanque(tanque) {
        return {
            type: 'CARGAR_TANQUE',
            tanque,
        }
    }

//pedir stado del mapa (thunk)
    export function getMapInfo() {
        return (dispatch) => {
            axios.get(`${ROOT_URL}/areascompletas`)
                .then(respuesta => dispatch(cargarInfo(respuesta.data)))
        }
    }

export function getTanque(id) {
    const req = axios.get(`http://54.234.124.9:3000/api/tanque/${id}`);

    return (dispatch) => {
        axios.get(req)
            .then(respuesta => dispatch(cargarTanque(respuesta.data)));

    };
}

export function select(target) {

        return {
            type: 'SELECT',
            payload: target
            };

}

