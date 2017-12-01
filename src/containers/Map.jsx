import React from 'react';
import { render } from 'react-dom';

//////////////////////////////////////////////////////////////////////////////////////////////
const lineCoordinates = [
  {lat:-38.850271, lng:-69.334857},
  {lat:-38.831876, lng:-69.118508},
  {lat:-38.934777, lng:-69.123027},
  {lat:-38.926690, lng:-69.291851},
  {lat:-38.850271, lng:-69.334857}
]

const markers = [
  { lat:-38.920635 , lng:-69.280765 },
  { lat:-38.912768 , lng:-69.219940 },
  { lat:-38.910736 , lng:-69.174527 },
  { lat:-38.860027 , lng:-69.207615 }
]

const config = {
  center: {
    lat :-38.879376,
    lng:-69.214060,
  },
  zoom : 12,
}
////////////////////////////////////////////////////////////////////////////////////////////////////
class Map extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markers: [],
    }
  }

  componentDidMount(){

    window.initMap = () => {

      this.map = new google.maps.Map(document.getElementById('map'),{
        center: {lat :-38.879376, lng:-69.214060},
        zoom: 10,
        mapTypeId: 'satellite',
        disableDefaultUI:true,
      });

      this.markers = [];

      this.polygon = [];

      this.createPolygon(lineCoordinates);
    }
  }

  createPolygon(path){
    this.polygon.push(new google.maps.Polygon({
      strokeColor: '#043789',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#043789',
      fillOpacity: 0.5
    }))
    for(var i = 0; i<this.polygon.length; i++){
      this.polygon[i].setPath(path);
      this.polygon[i].setMap(this.map);
      this.polygon[i].addListener('click', () => this.reDrawMap(config.center, config.zoom, lineCoordinates));
    }
  }

  createMarkers(markers){
    for(var i = 0; i<markers.length; i++){
      this.markers.push(new google.maps.Marker({
        position: markers[i],
        map: this.map,
        animation: google.maps.Animation.DROP
      }));                                                                                  //cooregir position(ultimo siempre)
      this.markers[this.markers.length-1].addListener('click',() => this.reDrawMarkers(this.markers[this.markers.length-1 ].position, 18))
    }
  }

  reDrawMap(center, zoom, path){
    //console.log(this);
    const pt = new google.maps.LatLng(center.lat, center.lng);
    this.map.setCenter(pt);
    this.map.setZoom(zoom);
    this.drop();
  }

  reDrawMarkers(center, zoom){
    //console.log(this.markers)
    this.clearPolygon();
    this.map.setCenter(center);
    this.map.setZoom(zoom);
    this.clearMarkers();
  }

  addMarkersWithTimeout(markers, timeout) {
    setTimeout(this.createMarkers(markers), timeout)
  }

  drop(){
      this.addMarkersWithTimeout(markers, 200);
  }

  clearMarkers(){
    for(var i = 0; i < this.markers.length; i++){
      this.markers[i].setMap(null);
    }
  }

  clearPolygon(){
    for(var i = 0; i < this.polygon.length; i++){
      this.polygon[i].setMap(null);
    }
  }

  render(){
    return(
      <div id = 'map'></div>
    )
  }
}

export default Map;
