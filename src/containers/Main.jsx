import React from 'react';
import { render } from 'react-dom';
import Map from './Map.jsx';
import Search from '../components/Search.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Main extends React.Component{
  constructor(props){
    super(props)
    console.log('info',this.props.info)
    this.state = {
      value: '',
      autocomplete : []
    }
  }
  
  onChange = (e) => {
    clearTimeout(this.timeout)
    this.setState({
      value : e.target.value,
    },() => { 
      this.timeout = setTimeout(this.filter,500)
    });
  }

  filter = () => {
    var result = []
    var arrays = Object.keys(this.props.info).map(propName => this.props.info[propName])
    for(var i=0; i < arrays.length; i++) {
      result = [
        ...result,
        ...arrays[i]
        .filter(obj => obj.nombre.toLowerCase().includes(this.state.value))
      ]
    }
    this.setState({
      autocomplete: result,
    })
  }

  dropdownItem = (lugar, s) => {
    if(lugar.tipo === 'R'){
      return <span style={{display: "inline-block"}}>{lugar.nombre}<i className="fa fa-globe" aria-hidden="true"></i></span>
    }
    if(lugar.tipo === 'L'){
      return <span className={s.iconWidth} style={{display: "inline-block"}}>{lugar.nombre}<i className="fa fa-map-marker" aria-hidden="true"></i></span>
    }
    if(lugar.tipo === 'T'){
      return <span className={s.iconWidth} style={{display: "inline-block"}}>{lugar.nombre}<i className="material-icons tiny">brightness_auto</i></span>
    }
  }

  render(){
    return(
      <div id='container'>

      <Search
        onChange={this.onChange}
        value={this.state.value}
        autocomplete={this.state.autocomplete}
        mostrar={this.dropdownItem}
      />        
      
      <Map />
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    info: state.dataMap.mapInfo,
  }
}

export default connect (mapStateToProps, null)(Main);



