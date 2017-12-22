import React from 'react';
import { render } from 'react-dom';
import materialize from 'materialize-css';
import Map from './Map.jsx';
import Search from '../../components/Search.jsx';
import SideNav from './SideNav';
import { connect } from 'react-redux';
import s from '../styles/SideNav.ncss';
import { bindActionCreators } from 'redux';


class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      current: null,
      value: '',
      autocomplete : []
    };

    this.updateCurrent.bind(this);
  }

  updateCurrent = (current) => {
      console.log(current);
      const newState = {
          current: current,
          value: this.state.value,
          autocomplete: this.state.autocomplete
      };
      this.setState(newState);
  };

  clearInput = () => {
    this.setState({
        value: ''
    })
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      value : e.target.value,
    }, () => {
      this.filter()
    });
  };

  filter = () => {
      let areas = this.props.info.regiones;
      let instalaciones = [];
      let tanques = [];
      areas.forEach(
          area => {
              instalaciones = [
                  ...instalaciones, ...area.instalaciones
              ]
          }
      );

      for(let i = 0; i < instalaciones.length; i++){
          tanques = [
              ...tanques, ...instalaciones[i].tanques
          ]
      }
      let result = [...areas, ...instalaciones, ...tanques];
      result = result.filter(obj => obj.nombre.toLowerCase().includes(this.state.value));

    this.setState({
      autocomplete: result,
    })
  };

  dropdownItem = (lugar, s) => {
    if(this.state.value === ''){
      return '';
    }
    if(lugar.tipo === 'R'){
      return <span style={{display: "inline-block"}}>{lugar.nombre}<i className="fa fa-globe" aria-hidden="true"></i></span>
    }
    if(lugar.tipo === 'L'){
      return <span className={s.iconWidth} style={{display: "inline-block"}}>{lugar.nombre}<i className="fa fa-map-marker" aria-hidden="true"></i></span>
    }
    if(lugar.tipo === 'T'){
      return <span className={s.iconWidth} style={{display: "inline-block"}}>{lugar.nombre}<i className="material-icons tiny">brightness_auto</i></span>
    }
  };

  render(){
    return(
      <div id='container'>
          <div className={s.collapseButtonContainer}>
              <div id={s.collapseButton} className={s.collapseButton} onClick={()=> this.setState({isVisible: !this.state.isVisible})}>
                  <i className="material-icons" id={s.buttonIcon} style={{color: 'rgba(0,0,0,0.6)', verticalAlign: 'middle', lineHeight: 51}}>keyboard_arrow_left</i>
              </div>
          </div>
          <Search clear={this.clearInput}
                  updateCurrent={this.updateCurrent}
                  onChange={this.onChange}
                  value={this.state.value}
                  autocomplete={this.state.autocomplete}
                  mostrar={this.dropdownItem}
          />
          <SideNav current={this.state.current} updateCurrent={this.updateCurrent} isVisible={this.state.current !== null}/>

          <Map updateCurrent={this.updateCurrent} current={this.state.current} />
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    info: state.dataMap.mapInfo,
  }
};

export default connect (mapStateToProps, null)(Main);



