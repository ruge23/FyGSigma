import React from 'react';
import { render } from 'react-dom';
import { Link, history } from 'react-router';
import Map from './Map.jsx'

export default class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      // map: null,
    }
  }

  reder(){
    return(
      <Map />
    )
  }
}



//       // Add marker
//       //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
//       var marker = new google.maps.Marker({
//         position:{
//           lat:-38.859467,
//           lng:-69.207356
//         },
//         map : map,
//         //icon: image
//       });
//       //Image Rectangle
//       var rectangle = new google.maps.Rectangle({
//         strokeColor: '#155fd6',
//         strokeOpacity: 0.6,
//         strokeWeight: 2,
//         fillColor: '#155fd6',
//         fillOpacity: 0.25,
//         map: map,
//         bounds: {
//           north: -38.98, //33.685,
//           south: -38.75,//33.671,
//           east: -69.01,//-116.234,
//           west: -69.40//-116.251
//         }
//       });
//     }
//   }
//   // componentDidMount(){
//   //   this.delayedShowMarker()
//   // }
//   //
//   // delayedShowMarker = () =>{
//   //   setTimeout(() => {
//   //     this.setState({ isMarkerShown : true })
//   //   }, 1500)
//   // }
//   //
//   // mapMoved(){
//   //   console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
//   // }
//   //
//   // zoomChanged(){
//   //   console.log('zoomChanged: '+ this.state.map.getZoom())
//   // }
//   //
//   // mapLoaded(map){
//   //   //console.log('mapLoaded: '+JSON.stringify(map.getCenter()))
//   //   if(this.state.map != null)
//   //       return
//   //
//   //   this.setState({
//   //       map: map
//   //     })
//   // }
//   //
//   // handleMarkerClick = () =>{
//   //   this.setState({isMarkerShown: false })
//   //   this.delayedShowMarker()
//   // }
//
//   render(){
//     return(
//         <div id='map'></div>
//         // <InitMap
//         //   mapLoaded = {this.mapLoaded.bind(this)}
//         //   onDragEnd = {this.mapMoved.bind(this)}
//         //   onZoomChanged = {this.zoomChanged.bind(this)}
//         //   isMarkerShown={this.state.isMarkerShown}
//         // />
//     );
//   }
// }
//   // constructor(props) {
//   //   super(props);
//   //   this.redirect = this.redirect.bind(this)
//   // }
//   //
