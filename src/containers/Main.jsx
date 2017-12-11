import React from 'react';
import { render } from 'react-dom';
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
