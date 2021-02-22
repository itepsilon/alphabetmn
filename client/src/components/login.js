import React, { Component } from 'react'
import { connect } from 'react-redux';
import {authenticateUser} from '../services/index'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = this.initialState;
    }

    initialState = {
        email: '',
        password: '',
        error:''
    }
    handleCredChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSend = () => {
        alert(this.state.email + " "+ this.state.password)
    }

    validateUser = () => {
        this.props.authenticateUser(this.state.email,this.state.password)
        setTimeout(() => {
            console.log(this.props.auth.isLoggedIn);
            if(this.props.auth.isLoggedIn){
                return this.props.history.push("/");
            } else {
                this.setState({"error": "Invalid email and pass"})
            }
        })
    }
    render() {
        const {email, password, error} = this.state;
        return (
            <div>
                Email
                <input value={email} name="email" onChange={this.handleCredChange}></input>
                Password
                <input value={password} name="password" onChange={this.handleCredChange}></input>
                <button onClick={this.validateUser}>send</button>
                <p>{this.state.error}</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth:state.auth
    }
}

const mapDispatchProps = dispatch =>{
    return {
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Login)
