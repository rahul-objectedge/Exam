import React, { Component } from 'react'
import { connect} from 'react-redux';
import {loginRequest} from '../../actions';
//import ToastMessage from '../ToastMessage/toastMessage'
//import './loginForm.css'

class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {username: '', password: '', responseStatus: '', err: {}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.doLogin({username : this.state.username, password: this.state.password});
       // let isValid = this.validateInputs();
           //   this.setState({responseStatus : response.status});
            //  this.setState({responseStatus: error.response.data.code});
        
                  
    }
    
    render(){
        const { isLoggedin } = this.props.store.loginReducer;
        console.log(isLoggedin);
        return(
            <>     
            {
                isLoggedin ? <div>Logged in successfully</div> :
                <form onSubmit = {this.handleSubmit}>
                    <label>Username: </label>
                    <input name="username" id="username" type="text" onChange={this.handleChange}></input>
                       
                    <label>Password: </label>              
                    <input name="password" type="password"  id="password" onChange={this.handleChange}></input>  
                       
                    <button type="submit">Submit</button>
                </form>
            }          
                
            </>
        );
    } 
    
}

const mapStateToProps = (state) => {  
    console.log(JSON.stringify(state));
    return {store : state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin : (loginCredential) => dispatch(loginRequest(loginCredential))
    }
}

const LoginPage = connect(
    mapStateToProps, mapDispatchToProps
)(LoginForm);

export default LoginPage