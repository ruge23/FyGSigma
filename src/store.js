import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './redux/reducers';
//importo los datos que vamos a usar por defecto
import locaciones from './data/locaciones';
import regiones from './data/regiones'
import tanques from './data/tanques'

// creo un Objeto con el stado por defecto
const defaultState = {
  dataMap: {
    mapInfo: {
      locaciones,
      tanques,
    },
    mapHistory: []
  },
  selected: {
      id: 1,nombre:'TK V-510',idLocacion:11, estado: 'rojo',tipo:'T',producto:'GLP',inscriptoA1: 'Si',client:'ypf',mapData: {
      center: {lat:-38.920396, lng:-69.279718},
      zoom: 25},
      datosTecnicos: {id:1,capacidad:160,materialTecho:'Acero al carbono',materialEnvolvente:'Acero al carbono',materialFondo:'Acero al carbono',aislacionTermica:false,tempDiseno:50,presionDiseno:1, //atmosferas
          tempOperacion:50,presionOperacion:1,espesorDisenoTecho:4.75,cantidadGeneratricesTecho:5,espesorDisenoFondo:6.35,espesorDisenoEnvuelta:5,
          cantidadGeneratricesEnvuelta:10,sobreEspesorCorrosion:'n/d',diametroExterno:9.10,altura:2.5,fechaFabricacion:'2007-01-01',altoBocaInspeccion:0.6,
          anchoBocaInspeccion:null,altoBocaLavado:1.1,anchoBocaLavado:1,idTanque:5},
      reparaciones: [{id:1,idTanque:1,fecha:'2017-08-10',tipoRevestimientoEnvueltaInterno:'epoxi',
          espesorRevestimientoEnvueltaInterno: 4,tiempoIntervencionEnvueltaInterno: 2,
          preparacionDeSuperficieEnvueltaInterno: 'preparacion',tipoRevestimientoTechoInterno:'epoxi bituminoso',
          espesorRevestimientoTechoInterno: 3,tiempoIntervencionTechoInterno:2,preparacionDeSuperficieTechoInterno:'prep sup techo interno',
          tipoRevestimientoFondoInterno:'epoxi bituminoso',espesorRevestimientoFondoInterno:2,tiempoIntervencionFondoInterno:2,
          preparacionDeSuperficieFondoInterno:'prep sup fondo',tipoRevestimientoEnvueltaExterno:'epoxi bituminoso',
          espesorRevestimientoEnvueltaExterno:5,tiempoIntervencionEnvueltaExterno:3,preparacionDeSuperficieEnvueltaExterno:'prep sup env ext',
          tipoRevestimientoTechoExterno:'epoxi bituminoso',espesorRevestimientoTechoExterno:3,tiempoIntervencionTechoExterno:2,
          preparacionDeSuperficieTechoExterno:'prep sup tech ext',tipoRevestimientoFondoExterno:'epoxi bituminoso',espesorRevestimientoFondoExterno:3,
          tiempoIntervencionFondoExterno:3,preparacionDeSuperficieFondoExterno:'prep sup fondo ext',primerAplicado:'primer Epoxi',
          trabajosEnvuelta: [{id:3,idReparacion:1,ubicacion:'envuelta',tipoReparacion:'trabajo en envuelta',cantidad:4,superficie:5,detallePdf:'archivo.pdf',tiempo:2,ordenTrabajo:'orden trabajo'}],
          trabajosTecho:[{id:1,idReparacion:1,ubicacion:'techo',tipoReparacion:'trabajo en techo',cantidad:2,superficie:5,detallePdf:'archivo.pdf',tiempo:2,ordenTrabajo:'orden trabajo'}],
          trabajosFondo: [{id:2,idReparacion:1,ubicacion:'fondo',tipoReparacion:'trabajo en fondo',cantidad:3,superficie:5,detallePdf:'archivo.pdf',tiempo:2,ordenTrabajo:'orden trabajo'}],
      }]
  }
};
// plugin de development
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);


// creo el store
const store = createStore(rootReducer, defaultState, enhancers);

export default store;
