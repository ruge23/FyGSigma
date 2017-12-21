import React from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux';;
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import * as actionCreator from '../../redux/actions/actionCreator';
import { bindActionCreators } from 'redux';
import materialize from 'materialize-css';
import s from '../styles/TanqueDatosTecnicos.ncss';


class TanqueDatosTecnicos extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h3 className="title">
                    <span className="name">{ this.props.tanque.nombre }</span> - Datos Técnicos.
                </h3>
                <div className="card" style={{width: '100%'}}>
                    <div className={[s.cardContent, 'card-content'].join(' ')} style={{width: '100%'}}>
                        <div className="row">
                            <table className={[s.table, 'table'].join(' ')}>
                                <tbody>
                                    <tr>
                                        <td>Fecha fabricación:</td>
                                        <td>{ this.props.tanque.datosTecnicos.fechaFabricacion }</td>
                                    </tr>
                                    <tr>
                                        <td>Capacidad:</td>
                                        <td>{ this.props.tanque.datosTecnicos.capacidad } m3</td>
                                    </tr>
                                    <tr>
                                        <td>Aislación térmica:</td>
                                        <td>{ this.props.tanque.datosTecnicos.aislacionTermica }</td>
                                    </tr>
                                    <tr>
                                        <td>Díametro</td>
                                        <td>{ this.props.tanque.datosTecnicos.diametroExterno } m</td>
                                    </tr>
                                    <tr>
                                        <td>Altura</td>
                                        <td>{ this.props.tanque.datosTecnicos.altura } m</td>
                                    </tr>
                                    {/*<tr>*/}
                                        {/*<td>Cantidad de Generatrices Envuelta:</td>*/}
                                        {/*<td>{ this.props.tanque.getCantGeneratricesEnvuelta() }</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                        {/*<td>Cantidad de Generatrices en techo:</td>*/}
                                        {/*<td>{ this.props.tanque.getCantGeneratricesTecho() }</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                        {/*<td>Cantidad de Virolas:</td>*/}
                                        {/*<td>{ this.props.tanque.getCantVirolas() }</td>*/}
                                    {/*</tr>*/}
                                    <tr>
                                        <td>Material envolvente:</td>
                                        <td>{ this.props.tanque.datosTecnicos.materialEnvolvente }</td>
                                    </tr>
                                    <tr>
                                        <td>Material techo:</td>
                                        <td>{ this.props.tanque.datosTecnicos.materialTecho }</td>
                                    </tr>
                                    <tr>
                                        <td>Material fondo:</td>
                                        <td>{ this.props.tanque.datosTecnicos.materialFondo }</td>
                                    </tr>
                                    <tr>
                                        <td>Espesor diseño fondo:</td>
                                        <td>{ this.props.tanque.datosTecnicos.espesorDisenoFondo } mm</td>
                                    </tr>
                                    <tr>
                                        <td>Espesor diseño techo:</td>
                                        <td>{ this.props.tanque.datosTecnicos.espesorDisenoTecho } mm</td>
                                    </tr>
                                    <tr>
                                        <td>Presión diseño:</td>
                                        <td>{ this.props.tanque.datosTecnicos.presionDiseno } kg/cm2</td>
                                    </tr>
                                    <tr>
                                        <td>Alto boca lavado:</td>
                                        <td>{ this.props.tanque.datosTecnicos.altoBocaLavado } mm</td>
                                    </tr>
                                    <tr>
                                        <td>Ancho boca lavado:</td>
                                        <td>{ this.props.tanque.datosTecnicos.anchoBocaLavado } mm</td>
                                    </tr>
                                    <tr>
                                        <td>Alto Boca Inspección:</td>
                                        <td>{ this.props.tanque.datosTecnicos.altoBocaInspeccion } mm</td>
                                    </tr>
                                    <tr>
                                        <td>Ancho Boca Inspección:</td>
                                        <td>{ this.props.tanque.datosTecnicos.anchoBocaInspeccion } mm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return{
        tanque: state.selected,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreator, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TanqueDatosTecnicos);