import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SideNav extends React.Component{


}

const mapStateToProps = state => {
    return{
        info: state.dataMap.mapInfo,
        historial: state.dataMap.mapHistory,
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreator, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);