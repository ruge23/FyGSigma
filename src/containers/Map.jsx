import React from 'react';
import { render } from 'react-dom';

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

class Map extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

    window.initMap = () => {
      this.map = new google.maps.Map(document.getElementById('map'),{
        center: {lat:-39.064064 , lng:-69.5903451},
        zoom: 9,
        mapTypeId: 'satellite'
      });
      //console.log(this)
      this.polygon = new google.maps.Polygon({
        strokeColor: '#155fd6',
        strokeOpacity: 0.5,
        strokeWeight: 3,
        fillColor: '#155fd6',
        fillOpacity: 0.2
      });

      this.polygon.setPath(lineCoordinates);
      this.polygon.setMap(this.map);
      this.polygon.addListener('click', () => this.reDrawMap(config.center, config.zoom, lineCoordinates));
    }
  }

  reDrawMap(center, zoom, path){
    this.polygon.setPath(path);
    const pt = new google.maps.LatLng(center.lat, center.lng);
    this.map.setCenter(pt);
    this.map.setZoom(zoom);
    this.drop();
  }

  addMarkersWithTimeout(position, timeout) {
    setTimeout(() => {
      var mark = new google.maps.Marker({
        position: position,
        map: this.map,
        animation: google.maps.Animation.DROP
      });
    }, timeout);
  }

  drop(){
    for(var i =0; i< markers.length; i++){
      this.addMarkersWithTimeout(markers[i], i * 200);
    }
  }

  render(){
    return(
      <div id = 'map'></div>
    )
  }
}

export default Map;

// import React from 'react';
// import { compose , withProps } from 'recompose';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';
//
// const lineCoordinates= [
//   {lat:-38.831876, lng:-69.118508},
//   {lat:-38.850271, lng:-69.334857},
//   {lat:-38.934777, lng:-69.123027},
//   {lat:-38.926690, lng:-69.291851},
//   {lat:-38.850271, lng:-69.334857}
//  ]
// const InitMap = compose(
//
//   withProps({
//     center: {lat:-39.064064 , lng:-69.5903451},
//     zoom : 9,
//     googleMapURL : "https://maps.googleapis.com/maps/api/js?key=AIzaSyCp3MyOjVXkmtK9oZmBAwhL5nyhq6U88wc&libraries=geometry,drawing,places",
//     loadingElement : <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `100%` }} />,
//     mapElement : <div style={{ height: `100%` }} />,
//     strokeColor : "#FF0000"
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//
//       <GoogleMap
//         ref = {props.mapLoaded}
//         onDragEnd = {props.onDragEnd}
//         onZoomChanged = {props.onZoomChanged}
//         defaultZoom = {props.zoom}
//         defaultCenter = {props.center}
//         defaultMapTypeId = 'satellite' >
//
//         {props.isMarkerShown && <Marker
//           position = {{ lat:-38.859467 , lng:-69.207356 }} />
//         }
//
//         <Polyline
//           path = {lineCoordinates}
//         />
//       </GoogleMap>
//   )
//
// export default InitMap;
