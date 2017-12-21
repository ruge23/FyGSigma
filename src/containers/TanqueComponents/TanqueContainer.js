import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import * as actionCreator from '../../redux/actions/actionCreator';
import { bindActionCreators } from 'redux';
import store from '../../store';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import s from '../styles/TanqueContainer.ncss';
import TanqueReparaciones from './TanqueReparaciones'
import TanqueDatosTecnicos from './TanqueDatosTecnicos';
import "materialize-css";



class TanqueContainer extends React.Component{
    constructor(props){
        super(props);

    }


    navHandler = (route) => {
        const newRoute = [this.props.location.pathname, route].join('/');
        this.props.router.push(newRoute);
    };
    render(){
        return (
            <div>
                <Header user="Hola"/>
                <div className={[s.listContainer, 'col', 's4', 'left'].join(' ')}>
                    <ul>
                        <li className="lc-t-link link" onClick={() => this.navHandler('dashboard')}>Dashboard</li>
                        <li className="lc-t-link link" onClick={() => this.navHandler('datos-tecnicos')}>Datos tecnicos</li>
                        <li className="lc-t-link link" onClick={() => this.navHandler('adm-inspecciones')}>Inspecciones</li>
                        <li className="lc-t-link link" onClick={() => this.navHandler('reparaciones')}>Reparaciones y modificaciones</li>
                        <li className="lc-t-link link" onClick={() => this.navHandler('auditorias')}>Auditoría 785/266</li>
                        <li className="lc-t-link link" onClick={() => this.navHandler('instrumentacion-control')}>Instrumentación y control</li>
                    </ul>
                </div>
                <div className={[s.contentContainer, 'col', 's8', 'left'].join(' ')}>
                    <Router history={hashHistory}>
                        {/*<Route path='/tanque/:idTanque/dashboard' component = { TanqueDashboard }/>*/}
                        {/*<Route path='/tanque/:idTanque/datos-tecnicos' component = { TanqueDatosTecnicos }/>*/}
                        {/*<Route path='/tanque/:idTanque/adm-inspecciones' component = { TanqueAdministradorInspecciones }/>*/}
                        <Route path='/tanque/:idTanque/reparaciones' component = { TanqueReparaciones }/>
                        {/*<Route path='/tanque/:idTanque/auditorias' component = { TanqueAuditorias }/>*/}
                        {/*<Route path='/tanque/:idTanque/instrumentacion-control' component = { TanqueInstrumentacion }/>*/}
                        {/*<Route path='/tanque/:idTanque/inspeccion/:idInspeccion' component = { TanqueInstrumentacion }/>*/}
                    </Router>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        selected: state.selected,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreator, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TanqueContainer);