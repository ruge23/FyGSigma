import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAreas } from "../redux/actions/actionCreator";
import * as actionCreator from '../redux/actions/actionCreator';


////////////////////////////////////////////////////////////////////////////////////////////////////
class Map extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAreas();
    console.log('hola?',this.props.info);
    console.log('mapHistorial', this.props.historial);
      
    this.map = new google.maps.Map(document.getElementById('map'),{
        center: {lat :-38.879376, lng:-69.214060},
        zoom: 10,
        mapTypeId: 'satellite',
        streetViewControl: false,
        disableDefaultUI:true,
      });

      this.markers = [];

      this.polygon = [];

      setTimeout(()=>this.mostrarRegiones(), 10000)
  }


  //Metodo para crear polygonos
  createPolygon(mapData, object){
      return new google.maps.Polygon({
          path: mapData.bounds,
          strokeColor: '#176EB1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#176EB1',
          fillOpacity: 0.35,
          object: object
      });
  }

  //Metodo para crear marcadores
  createMarker(mapData, labelText, object){
      return new google.maps.Marker({
          position: new google.maps.LatLng(mapData.center.lat, mapData.center.lng),
          map: this.map,
          label:{
              color: 'black',
              fontWeigth: 'bold',
              text: labelText
          },
          object: object
      });
  }

  removeFromMap(){
    for(let i = 0; i < this.markers.length; i++){
      this.markers[i].setMap(null);
    }
    for(let j = 0; j < this.polygon.length; j++){
      this.polygon[j].setMap(null);
    }
    this.polygon =[];
    this.markers = [];
  }
  mostrarRegiones(){
    this.removeFromMap();
    for(let i = 0; i < this.props.info.regiones.length; i++){
      const poligono = this.createPolygon(this.props.info.regiones[i].mapData, this.props.info.regiones[i]);
      //el marker de cada region
      const markerReg = this.createMarker(this.props.info.regiones[i].mapData, this.props.info.regiones[i].nombre, this.props.info.regiones[i]);
      const icon = new google.maps.MarkerImage(
          'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFFF00'
          ,null
          ,null
          ,null
          ,new google.maps.Size(1, 1));
      markerReg.setIcon(icon);
      this.markers.push(markerReg);
      poligono.setMap(this.map);
      this.polygon.push(poligono);
      ((indice) => google.maps.event.addListener(poligono, 'click', () => {
        //this.removeFromMap();
        this.props.addToHistory({ vista: 'R', region: indice, locacion: null });
        this.mostrarLocaciones(poligono.object);
        this.map.setCenter(poligono.object.mapData.center);
        this.map.setZoom(poligono.object.mapData.zoom);
      }))(i);
      google.maps.event.addListener(markerReg, 'click', () => {
        //this.removeFromMap();
        this.mostrarLocaciones(poligono.object);
        this.map.setCenter(poligono.object.mapData.center);
        this.map.setZoom(poligono.object.mapData.zoom);
      })
    }
  }

  mostrarLocaciones(region){
    //console.log(region)
    this.removeFromMap();
    this.map.setCenter(region.mapData.center);
    this.map.setZoom(region.mapData.zoom);
    const poligono = this.createPolygon(region.mapData, region);
    poligono.setMap(this.map);
    this.polygon.push(poligono);
    for(let i = 0; i<this.props.info.locaciones.length; i++){
      if(this.props.info.locaciones[i].idRegion === region.id){
        const markerLocaciones = this.createMarker(this.props.info.locaciones[i].mapData, this.props.info.locaciones[i].nombre, this.props.info.locaciones[i]);
        this.markers.push(markerLocaciones);                                                                                  //cooregir position(ultimo siempre)
        ((indice) => google.maps.event.addListener(markerLocaciones, 'click', () =>{
          this.removeFromMap();
          var indiceReg = this.props.info.regiones.findIndex(reg => reg.id === region.id);
          this.props.addToHistory({ vista: 'L', region: indiceReg, locaciones: indice });
          this.mostrarTanques(markerLocaciones.object);
        }))(i);
      }
    }
  }

  mostrarTanques(locacion){
    this.removeFromMap();
    this.map.setCenter(locacion.mapData.center);
    this.map.setZoom(locacion.mapData.zoom);
    const equipos = this.props.info.tanques;
    for (let i = 0; i < equipos.length; i++) {
      if(equipos[i].idLocacion === locacion.id){
        const marker = this.createMarker(equipos[i].mapData, '', equipos[i]);
        marker.setLabel(null);
        let icon;
        if (equipos[i].estado === 'verde') {
          icon = 'http://maps.google.com/mapfiles/ms/icons/green.png';
        }
        if (equipos[i].estado === 'amarillo') {
          icon = 'http://maps.google.com/mapfiles/ms/icons/yellow.png';
        }
        if (equipos[i].estado === 'rojo') {
          icon = 'http://maps.google.com/mapfiles/ms/icons/red.png';
        }
        marker.setIcon(icon);
        this.markers.push(marker);
      }
    }
  }

  goBack(){
    //console.log(this.props.historial);
    const hist = this.props.historial[this.props.historial.length-1];
    this.removeFromMap();
    if(this.props.historial.length <= 1) {
      this.mostrarRegiones();
      this.map.setZoom(10);
    } else if (hist.vista === 'L'){
      console.log('REGION',this.props.info.regiones[hist.region]);
      this.mostrarLocaciones(this.props.info.regiones[hist.region])
    } else if(hist.vista === 'R'){
      this.mostrarRegiones()
    }
    this.props.volver()
  }

  render(){
    return(
      <div className="map">
        <div id='map'>
        </div>
        <button className='control-back' onClick={this.goBack.bind(this)}>GoBack</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    info: state.dataMap.mapInfo,
    historial: state.dataMap.mapHistory,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreator, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
