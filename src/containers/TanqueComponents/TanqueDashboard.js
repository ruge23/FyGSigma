import React from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux';;
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import * as actionCreator from '../../redux/actions/actionCreator';
import { bindActionCreators } from 'redux';
import materialize from 'materialize-css';
import s from '../styles/TanqueDashboard.ncss';


class TanqueDashboard extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
             <div>
                 <h3 className={s.title}>
                     <span className={s.name}>{ this.props.tanque.nombre }</span> - Dashboard.
                 </h3>
                 <div className="row" style={{display: 'inline-block', width: '100%'}}>
                     <div className="col s4" style={{width: '32%'}}>
                         <div className={['card', s.noShadow].join(' ')} style={{backgroundColor: '#f1f2f4'}}>
                             <div className="card-image">
                                 <img src="" style={{height: 231, width: 'auto', marginLeft: 35}}/>
                             </div>
                         </div>
                      </div>
                     <div className="col s8">
                         <div className={['card', s.datosCard].join(' ')} style={{height: 231, verticalAlign: 'middle'}} >
                             <div className={['card-content', s.cardContent].join(' ')} style={{width: '100%'}}>
                                 <div className="row">
                                     <div className="col s6" style={{verticalAlign: 'middle'}}>
                                         <ul style={{display: 'inline-block', width: '100%'}}>
                                           <li className={s.datosLi} style={{paddingTop: 10}}>Región: <span className={['right', s.datosSpan].join(' ')}>{region.nombre}</span></li>
                                           <li className={s.datosLi}>Instalación: <span className={['right', s.datosSpan].join(' ')}>{locacion.nombre}</span></li>
                                           <li className={s.datosLi}>Producto: <span className={['right', s.datosSpan].join(' ')}>{tanque.producto}</span></li>
                                         </ul>
                                     </div>
                                     <div className="col s6" style={{verticalAlign: 'middle'}}>
                                       <ul style={{display: 'inline-block', width: '100%'}}>
                                         <li className={s.datosLi} style={{paddingTop: 10}}>Altura: <span className={['right', s.datosSpan].join(' ')} style={{textAlign: 'right'}}>{tanque.datosTecnicos.altura} m</span></li>
                                         <li className={s.datosLi}>Diametro: <span className={['right', s.datosSpan].join(' ')} style={{textAlign: 'right'}}>{tanque.datosTecnicos.diametroExterno} m</span></li>
                                         <li className={s.datosLi}>Capacidad: <span className={['right', s.datosSpan].join(' ')} style={{textAlign: 'right'}}>{tanque.datosTecnicos.capacidad} &#13221; </span></li>
                                       </ul>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="row" style={{display: 'inline-block', width: '100%'}}>
                     <div className="col s4">
                         <div className={['card', 'darken-1', s.stateCard, 'hoverable'].join(' ')}>
                             <div className={['card-title', 'center', s.cardTitle].join(' ')}>
                                 Auditoría Res. 785/266
                             </div>
                             <div className={['card-content', s.cardContent].join(' ')}>
                                 <div className="row">
                                     <div className="col s3">
                                       <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'red'}}>remove_circle</i>
                                       <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'yellow'}}>warning</i>
                                       <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'green'}}>check_circle</i>
                                     </div>
                                     <div className={['col', 's9', s.stateTitle].join(' ')}>
                                         <div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Válido Hasta: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Fecha de vencimiento: </div>
                                             <div className={s.dueDate}>{formatDate(this.props.tanque.getVencimientoAuditoria().fechaVTO)}</div>
                                         </div>
                                         <div style={{paddingTop: '15'}}>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Faltan: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Vencido hace: </div>
                                             <div className={s.dueDate}>{this.props.tanque.getVencimientoAuditoria().difference} {this.props.tanque.getVencimientoAuditoria().tipo} </div>
                                         </div>
                                     </div>
                                 </div>
                              </div>
                         </div>
                     </div>
                     <div className="col s4">
                         <div className={['card', 'darken-1', s.stateCard, 'hoverable'].join(' ')}>
                             <div className={['card-title', 'center', s.cardTitle].join(' ')}>
                                 Vida remanente
                             </div>
                             <div className={['card-content', s.cardContent].join(' ')}>
                                 <div className="row">
                                     <div className="col s3">
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'red'}}>remove_circle</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'yellow'}}>warning</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'green'}}>check_circle</i>
                                     </div>
                                 <div className="col s9" style={{marginTop: 11}}>
                                     <div className={s.stateTitle} style={{display: 'inline-block', marginLeft: 15, width: '80%', textAlign: 'left'}}>Techo:
                                         <div className={[s.dueDate, 'right'].join(' ')} style={{fontSize: 20, paddingLeft: 0, display: 'inline-block', marginTop: 0, width: 'auto', textAlign: 'right'}}>
                                             {getVidaRemanenteTecho()} Años
                                         </div>
                                     </div>
                                     <div className={s.stateTitle} style={{display: 'inline-block', marginLeft: 15, marginTop: 10, width: '80%', textAlign: 'left'}}>Envuelta:
                                         <div className={[s.dueDate, 'right'].join(' ')} style={{fontSize: 20, paddingLeft: 0, display: 'inline-block', marginTop: 0, width: 'auto', textAlign: 'right'}}>
                                             {getVidaRemanenteEnvuelta()} Años
                                         </div>
                                     </div>
                                     <div className={s.stateTitle} style={{display: 'inline-block', marginLeft: 15, marginTop: 10, width: '80%', textAlign: 'left'}}>Fondo:
                                         <div className={[s.dueDate, 'right'].join(' ')} style={{fontSize: 20, paddingLeft: 0, display: 'inline-block', marginTop: 0, width: 'auto', textAlign: 'right'}}>
                                             {getVidaRemanentePiso()} Años
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col s4">
                         <div className={['card', 'darken-1', s.stateCard, 'hoverable'].join(' ')}>
                             <div className={['card-title', 'center', s.cardTitle].join(' ')}>
                                 Lavado
                             </div>
                             <div className={['card-content', s.cardContent].join(' ')}>
                                 <div className="row">
                                     <div className="col s3">
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'red'}}>remove_circle</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'yellow'}}>warning</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'green'}}>check_circle</i>
                                     </div>
                                     <div className={['col', 's9', s.stateTitle].join(' ')}>
                                         <div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Válido Hasta: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Fecha de vencimiento: </div>
                                             <div className={s.dueDate}>{formatDate(this.props.tanque.getVencimientoLavado().fechaVTO)}</div>
                                         </div>
                                         <div style={{paddingTop: 15}}>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Faltan: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Vencido hace: </div>
                                             <div className={s.dueDate}>{this.props.tanque.getVencimientoLavado().difference} {this.props.tanque.getVencimientoLavado().tipo} </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="row" style={{display: 'inline-block', width: '100%'}}>
                     <div className="col s4">
                         <div className={['card', 'darken-1', s.stateCard, 'hoverable'].join(' ')}>
                             <div className={['card-title', 'center', s.cardTitle].join(' ')}>
                                 Revestimiento
                             </div>
                             <div className={['card-content', s.cardContent].join(' ')}>
                                 <div className="row">
                                     <div className="col s3">
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'red'}}>remove_circle</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'yellow'}}>warning</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'green'}}>check_circle</i>
                                     </div>
                                     <div className={['col', 's9', s.stateTitle].join(' ')}>
                                         <div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Válido Hasta: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Fecha de vencimiento: </div>
                                             <div className={s.dueDate}>{formatDate(this.props.tanque.getVencimientoRevestimiento().fechaVTO)}</div>
                                         </div>
                                         <div style={{paddingTop: 15}}>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Faltan: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Vencido hace: </div>
                                             <div className={s.dueDate}>{this.props.tanque.getVencimientoRevestimiento().difference} {this.props.tanque.getVencimientoRevestimiento().tipo} </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col s4">
                         <div className={['card', 'darken-1', s.stateCard, 'hoverable'].join(' ')}>
                             <div className={['card-title', 'center', s.cardTitle].join(' ')}>
                                 Instrumentación y Control
                             </div>
                             <div className={['card-content', s.cardContent].join(' ')}>
                                 <div className="row">
                                     <div className="col s3">
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'red'}}>remove_circle</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'yellow'}}>warning</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'green'}}>check_circle</i>
                                     </div>
                                     <div className={['col', 's9', s.stateTitle].join(' ')}>
                                         <div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Válido Hasta: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Fecha de vencimiento: </div>
                                             <div className={s.dueDate}>{formatDate(this.props.tanque.getVencimientoInstrumentacionControl().fechaVTO)}</div>
                                         </div>
                                         <div style={{paddingTop: 15}}>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Faltan: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Vencido hace: </div>
                                             <div className={s.dueDate}>{this.props.tanque.getVencimientoInstrumentacionControl().difference} {this.props.tanque.getVencimientoInstrumentacionControl().tipo} </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col s4">
                         <div className={['card', 'darken-1', s.stateCard, 'hoverable'].join(' ')} >
                             <div className={['card-title', 'center', s.cardTitle].join(' ')}>
                                 Control puesta a tierra
                             </div>
                             <div className={['card-content', s.cardContent].join(' ')}>
                                 <div className="row">
                                     <div className="col s3">
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'red'}}>remove_circle</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'yellow'}}>warning</i>
                                         <i className={['material-icons', s.stateIcon].join(' ')} style={{color: 'green'}}>check_circle</i>
                                     </div>
                                     <div className={['col', 's9', s.stateTitle].join(' ')}>
                                         <div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Válido Hasta: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Fecha de vencimiento: </div>
                                             <div className={s.dueDate}>{formatDate(this.props.tanque.getVencimientoPuestaTierra().fechaVTO)}</div>
                                         </div>
                                         <div style={{paddingTop: 15}}>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Faltan: </div>
                                             <div className={['left-align', s.leftAlign].join(' ')}>Vencido hace: </div>
                                             <div className={s.dueDate}>{this.props.tanque.getVencimientoPuestaTierra().difference} {this.props.tanque.getVencimientoPuestaTierra().tipo} </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TanqueDashboard);