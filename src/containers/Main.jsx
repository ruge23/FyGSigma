import React from 'react';
import { render } from 'react-dom';
import Map from './Map.jsx';
import Search from '../components/Search.jsx';

export default class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      // map: null,
    }
  }

  render(){
    return(
      <div id='container'>
        <Search />
        <Map />
      </div>
    )
  }
}
