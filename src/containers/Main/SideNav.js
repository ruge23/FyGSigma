import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dock from 'react-dock';
import * as actionCreator from '../../redux/actions/actionCreator';
import s from '../styles/SideNav.ncss';
import materialize from 'materialize-css';

class SideNav extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isVisible: props.isVisible
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.isVisible !== nextProps.isVisible){
            this.setState({ isVisible: nextProps.isVisible});
        }
    }

    renderInstalacionDetailHelper(instalaciones) {
        if (instalaciones !== null) {
          return instalaciones.forEach((instalacion) =>{return this.renderInstalacionDetail(instalacion)});
        }
    }
    renderInstalacionDetail(instalacion){
        return (
            <li onClick={() => this.props.updateCurrent(instalacion)}>
                <div className={s.locacionDisplay}>
                    <div className={s.locacionContent}>
                        <div className={s.locacionHeader}>
                            <h3 className={s.locacionTittle}>{instalacion.nombre}</h3>
                        </div>
                        <div className={s.locacionDetail}>
                            <div>Cantidad de equipos: </div>
                            <div style={{display: "inline-block"}}>
                                Críticos:
                                <i className="material-icons right" style={{verticalAlign: 'middle', fontSize: "1rem"}}>brightness_1</i>
                            </div>
                        </div>
                    </div>
                    <div className={s.searchImgContainer}>
                        <img src={`./../assets/img/${instalacion.nombre}-${instalacion.idRegion}-${instalacion.idTipoLocacion}.jpeg`} className={s.searchImg}/>
                    </div>
                </div>
            </li>
        )}

    render(){
        return (

            <Dock  position='left' dimMode='none' fluid={false} size={408} zIndex={8} isVisible={this.state.isVisible}>
                {this.props.current === null ? null : (
                <div>
                <div id={s.sideNav} style={{position: 'fixed'}}>
                    <div className={s.imgContainer}>
                        <img src="../../assets/img/test1.jpg" className={s.imgDetail} alt=""/>
                    </div>
                    <a className={[s.btnPlanos, 'btn-floating btn-large waves-effect waves-light'].join(' ')} ><i className="material-icons" style={{color: '#176EB1'}}>map</i></a>
                    <div id={s.name}>
                        <h1>{this.props.current.nombre}</h1>
                        <div>
                            <h1>{this.props.current.tipo === 'R'? 'Region' : 'Instalacion'}</h1>
                        </div>
                    </div>
                </div>
                    <div>
                        <div className={s.estadisticasImg}>
                            <img src={`../assets/img/${this.props.current.nombre}-estadisticas.jpeg`}/>
                        </div>
                        <ul style={{marginTop: 0}}>
                            {this.props.current.tipo === 'R'? null : this.renderInstalacionDetailHelper(this.props.current.tanques)}
                        </ul>
                    </div>
                    {/*<div>*/}
                        {/*<ul style="margin-top: 0;">*/}
                            {/*<li>*/}
                                {/*<div className="locacion-display">*/}
                                    {/*<div className="locacion-content">*/}
                                        {/*<div className="locacion-header">*/}
                                            {/*<h3 className="locacion-tittle">{{tanque.nombre}}</h3>*/}
                                        {/*</div>*/}
                                        {/*<div className="locacion-detail">*/}
                                            {/*<div>Auditoria 785/266: <span>{{tanque.inscriptoA1}}</span></div>*/}
                                            {/*<div>Vida Remanente: {{tanque.getVidaRemanenteTanque()}}</div>*/}
                                            {/*<div>Capacidad: {{tanque.datosTecnicos.capacidad}} 	&#13221;</div>*/}
                                            {/*<div>Última intervención: {{tanque.getUltimaIntervencion()|date:'y'}} <span>({{tanque.getTiempoUltimaIntervencion()}} Años)</span> </div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="search-img-container">*/}
                                        {/*<img src="../../assets/img/{{tanque.nombre}}-{{tanque.idLocacion}}.jpeg"className="search-img"/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                </div>
                )}

            </Dock>

        )
    }


}


const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreator, dispatch);
};

export default connect(null, mapDispatchToProps)(SideNav);