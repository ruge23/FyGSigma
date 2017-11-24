import React from 'react';


export default class Main extends React.Component{

  componentDidMount(){

    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'),{
        zoom : 9,
        center : new google.maps.LatLng(-39.064064,-69.5903451),
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeId : 'satellite'
      });
      // Add marker
      //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

      var marker = new google.maps.Marker({
        position:{
          lat:-38.859467,
          lng:-69.207356
        },
        map : map,
        //icon: image
      });
      var rectangle = new google.maps.Rectangle({
        strokeColor: '#155fd6',
        strokeOpacity: 0.6,
        strokeWeight: 2,
        fillColor: '#155fd6',
        fillOpacity: 0.25,
        map: map,
        bounds: {
          north: -38.95, //33.685,
          south: -38.75,//33.671,
          east: -69.09,//-116.234,
          west: -69.35//-116.251
        }
      });
    }
  }


  render(){
    return(
      <div id='map'></div>
    )
  }
}
