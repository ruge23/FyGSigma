import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store';
import * as actionCreator from '../redux/actions/actionCreator';


////////////////////////////////////////////////////////////////////////////////////////////////////
class Map extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.info)
    window.initMap = () => {

      this.map = new google.maps.Map(document.getElementById('map'),{
        center: {lat :-38.879376, lng:-69.214060},
        zoom: 10,
        mapTypeId: 'satellite',
        disableDefaultUI:true,
      });

      this.markers = [];

      this.polygon = [];

      this.mostrarRegiones();
    }
  }

  removeMap(){
    for(var i = 0; i < this.markers.length; i++){
      this.markers[i].setMap(null);
    }
    for(var j = 0; j < this.polygon.length; j++){
      this.polygon[j].setMap(null);
    }
  }
  mostrarRegiones(){
    this.removeMap();
    for(var i = 0; i < this.props.info.regiones.length; i++){
      const poligono = new google.maps.Polygon({
        path: this.props.info.regiones[i].mapData.bounds,
        strokeColor: '#176EB1',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#176EB1',
        fillOpacity: 0.35,
        region: this.props.info.regiones[i]
      });
      const markerReg = new google.maps.Marker({
        position: new google.maps.LatLng(this.props.info.regiones[i].mapData.center.lat, this.props.info.regiones[i].mapData.center.lng),
        map: this.map,
        label:{
          color: 'black',
          fontWeigth: 'bold',
          text: this.props.info.regiones[i].nombre,
        },
      });
      this.markers.push(markerReg);
      poligono.setMap(this.map);
      this.polygon.push(poligono);
      google.maps.event.addListener(poligono, 'click', () => {
        //this.removeMap();
        this.mostrarLocaciones(poligono.region)
        this.map.setCenter(poligono.region.mapData.center);
        this.map.setZoom(poligono.region.mapData.zoom);
        //this.update(poligono.region);
      });
      google.maps.event.addListener(markerReg, 'click', () => {
        //this.removeMap();
        this.mostrarLocaciones(poligono.region);
        this.map.setCenter(poligono.region.mapData.center);
        this.map.setZoom(poligono.mapData.zoom);
        //this.update(poligono.region);
      })
    }
  }

  mostrarLocaciones(region){
    //console.log(region)
    this.removeMap();
    this.map.setCenter(region.mapData.center);
    this.map.setZoom(region.mapData.zoom);
    const poligono = new google.maps.Polygon({
      paths: region.mapData.bounds,
      strokeColor:'#176EB1',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor:'#176EB1',
      fillOpacity: 0.35,
      region: region,
    });
    poligono.setMap(this.map);
    this.polygon.push(poligono);
    for(var i = 0; i<this.props.info.locaciones.length; i++){
      if(this.props.info.locaciones[i].idRegion === region.id){
        const markerLocaciones = new google.maps.Marker({
          position: new google.maps.LatLng(this.props.info.locaciones[i].mapData.center.lat, this.props.info.locaciones[i].mapData.center.lng),
          map: this.map,
          animation: google.maps.Animation.DROP,
          label:{
            color: 'black',
            fontWeigth: 'bold',
            text: this.props.info.locaciones[i].nombre
          },
          locacion: this.props.info.locaciones[i]
        });
        this.markers.push(markerLocaciones);                                                                                  //cooregir position(ultimo siempre)
        google.maps.event.addListener(markerLocaciones, 'click', () =>{
          this.removeMap();
          this.mostrarTanques(markerLocaciones.locacion);
        });
      }
    }
  }

  mostrarTanques(locacion){
    this.removeMap();
    this.map.setCenter(locacion.mapData.center);
    this.map.setZoom(locacion.mapData.zoom);
    const equipos = this.props.info.tanques;
    for (var i = 0; i < equipos.length; i++) {
      if(equipos[i].idLocacion === locacion.id){
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
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(equipos[i].mapData.center.lat, equipos[i].mapData.center.lng),
          map: this.map,
          animation: google.maps.Animation.DROP,
          icon: icon,
          idEquipo: this.props.info. tanques[i].id,
        });
      }
    }
  }

  render(){
    return(
      <div id = 'map'></div>
    )
  }
}

const mapStateToProps = state => {
  return{
    info: state.dataMap.mapInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( actionCreator , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
