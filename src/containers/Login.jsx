import React from 'react';
import materialize from 'materialize-css';
import s from './styles/Login.ncss';
import './styles/Login.ncss';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmitLogin(e){
        e.preventDefault();
        if(this.state.username === "nestor" && this.state.password === "sigma2017"){
            this.props.router.push('/home');
        }else{
            alert("Usuario no Logueado!");
        }
    }

    render(){
        return(
            <div id="login" className ={s.row}>
                <form onSubmit={this.handleSubmitLogin} className="login-form" id={s.loginFormClass}>
                    <div className = "col s12 z-depth-4 card-panel login-card">
                        <div className="row">
                            <div className="input-field col s12 center">
                                <img src="../assets/img/FyG-lupa.png" style={{width: "100px", height: "auto"}} />
                                <p className="center login-form-text">SIGMA</p>
                            </div>
                        </div>    
                        
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <i className="material-icons prefix align-icon">account_circle</i>
                                    <input id="username" type="text" className="validate" onChange={this.handleChange} /> 
                                    <label className="center-align" style={{textAlign: "left"}}>Username</label>
                                </div>
                            </div>

                        <div className="row">
                            <div className="input-field col s12 center">    
                                <i className="material-icons prefix align-icon">lock</i>
                                <input id="password" type="password" className="validate" onChange={this.handleChange} />
                                <label style={{textAlign: "left"}}>Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <button className="btn col s12">Login</button>
                            </div>
                        </div>
                    </div>    
               </form>    
            </div>
        )
    }
}