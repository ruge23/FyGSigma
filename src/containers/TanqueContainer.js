import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as actionCreator from '../redux/actions/actionCreator';
import { bindActionCreators } from 'redux';


class TanqueContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <Header user="Hola"/>
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