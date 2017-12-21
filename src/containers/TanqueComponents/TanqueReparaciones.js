import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import * as actionCreator from '../../redux/actions/actionCreator';
import { bindActionCreators } from 'redux';
import store from '../../store';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import s from '../styles/TanqueReparaciones.ncss';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "materialize-css";
import materialize from 'materialize-css';


class TanqueReparaciones extends React.Component{
    constructor(props){
        super(props);

    }

    renderDetailReparacion = (row) => {
        const techo = this.props.tanque.reparaciones.trabajosTecho;
        const envuelta = this.props.tanque.reparaciones.trabajosEnvuelta;
        const fondo = this.props.tanque.reparaciones.trabajosFondo;
        return (
            <div style={{ padding: "20px" }}>
                <h2>
                    Detalle O.T.
                </h2>
                <ReactTable
                    data={techo}
                    columns={[
                        {
                            Header: "Id",
                            accessor: "id",
                            sortMethod: (a, b) => {
                                return a > b ? 1 : -1;
                            }
                        },
                        {
                            Header: "Fecha",
                            accessor: "fecha",
                            sortMethod: (a, b) => {
                                const dateA = new Date(a);
                                const dateB = new Date(b);

                                return dateA.getTime() > dateB.getTime() ? 1 : -1;
                            }
                        },
                        {
                            Header: "Tipo",
                            accessor: 'tipo'
                        }
                    ]}
                    previousText='Anterior'
                    nextText='Proxima'
                    defaultPageSize={5}
                    className="-striped -highlight detalle-ot"
                />
                <ReactTable
                    data={envuelta}
                    columns={[
                        {
                            Header: "Id",
                            accessor: "id",
                            sortMethod: (a, b) => {
                                return a > b ? 1 : -1;
                            }
                        },
                        {
                            Header: "Fecha",
                            accessor: "fecha",
                            sortMethod: (a, b) => {
                            const dateA = new Date(a);
                            const dateB = new Date(b);

                            return dateA.getTime() > dateB.getTime() ? 1 : -1;
                        }
                        },
                        {
                            Header: "Tipo",
                            accessor: 'tipo'
                        }
                    ]}
                    previousText='Anterior'
                    nextText='Proxima'
                    defaultPageSize={5}
                    className="-striped -highlight detalle-ot"
                />
                <ReactTable
                    data={fondo}
                    columns={[
                        {
                            Header: "Id",
                            accessor: "id",
                            sortMethod: (a, b) => {
                                return a > b ? 1 : -1;
                            }
                        },
                        {
                            Header: "Fecha",
                            accessor: "fecha",
                            sortMethod: (a, b) => {
                            const dateA = new Date(a);
                            const dateB = new Date(b);

                            return dateA.getTime() > dateB.getTime() ? 1 : -1;
                        }
                        },
                        {
                            Header: "Tipo",
                            accessor: 'tipo'
                        }
                    ]}
                    previousText='Anterior'
                    nextText='Proxima'
                    defaultPageSize={5}
                    className="-striped -highlight detalle-ot"
                />
            </div>
        )
    };

    render(){
        const reparaciones = this.props.tanque.reparaciones;
        return (
            <div>
                <h3 className="h3-header title">
                    <span className="name">{ this.props.tanque.nombre }</span> - Reparaciones y modificaciones.
                </h3>
                <div className="row">
                    <div className={[s.cardi, "datosCard"].join(' ')}>
                        <div className={[s.cardHeader, "center"].join(' ')}>
                            <h3 className="h3-header" style={{margin: 0}}>Historial Reparaciones.</h3>
                        </div>
                        <div className={s.cardContent}>
                            <div className="row">
                                <ReactTable
                                    data={reparaciones}
                                    columns={[
                                        {
                                            Header: "Id",
                                            accessor: "id",
                                            sortMethod: (a, b) => {
                                                return a > b ? 1 : -1;
                                            }
                                        },
                                        {
                                            Header: "Fecha",
                                            accessor: "fecha",
                                            sortMethod: (a, b) => {
                                                const dateA = new Date(a);
                                                const dateB = new Date(b);

                                                return dateA.getTime() > dateB.getTime() ? 1 : -1;
                                            }
                                        },
                                        {
                                            Header: "Tipo",
                                            accessor: 'tipo'
                                        }
                                    ]}
                                    previousText='Anterior'
                                    nextText='Proxima'
                                    defaultPageSize={10}
                                    SubComponent={this.renderDetailReparacion}
                                    className="-striped -highlight"
                                />
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

export default connect(mapStateToProps, mapDispatchToProps)(TanqueReparaciones);