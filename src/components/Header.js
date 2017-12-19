import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import s from './styles/Header.ncss';
import Popover from 'material-ui/Popover/Popover';


export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: 'hola',
            open: false,
            anchorOrigin: {
                horizontal: 'middle',
                vertical: 'bottom',
            },
            targetOrigin: {
                horizontal: 'middle',
                vertical: 'top',
            },
        };
    }

    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render(){
        return(
            <div>
                <nav id={s.header}>
                    <div className="nav-wrapper">
                        <ul id={s.navMobile} className="hide-on-med-and-down">
                            <li className={s.logoContainer}><img src="./assets/img/LogoFyG.png" className={s.logoHeader}/></li>
                            <li className={s.filler}></li>
                            <li className="right" >
                              <div className={s.userWrapper}>
                                  <a id={s.navLink} onClick={this.handleClick} className="dropdown-button right" >
                                      <i className="material-icons left">person</i>{this.state.user.toUpperCase()}<i className="material-icons right">arrow_drop_down</i>
                                  </a>
                              </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Popover
                    className={s.dropdown}
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={this.state.anchorOrigin}
                    targetOrigin={this.state.targetOrigin}
                    onRequestClose={this.handleRequestClose}
                >
                    <div  id={s.userOptionsDropdown} className={s.dropdownContent}>
                        <a id={s.salir} className="white-text" href="#!">Salir</a><i className="material-icons">exit_to_app</i>
                    </div>
                </Popover>
            </div>
        )
    }
}