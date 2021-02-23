import React, { Component } from 'react'
import { connect } from 'react-redux';
import {authenticateUser} from '../services/index'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = this.initialState;
    }

    initialState = {
        username: '',
        password: '',
        error:''
    }
    handleCredChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSend = () => {
        alert(this.state.username + " "+ this.state.password)
    }

    validateUser = () => {
        this.props.authenticateUser(this.state.username,this.state.password)
        setTimeout(() => {
            if(this.props.auth.isLoggedIn){
                return this.props.history.push("/");
            } else {
                this.setState({"error": "Invalid username and pass"})
            }
        },500)
    }
    render() {
        const {username, password, error} = this.state;
        return (
            <div>
                username
                <input value={username} name="username" onChange={this.handleCredChange}></input>
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
        authenticateUser: (username, password) => dispatch(authenticateUser(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Login)
