import React, { Component } from 'react'
import { connect } from 'react-redux';
import {authenticateUser} from '../services/index'
import styled from 'styled-components'
class Login extends React.Component {
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
            if(this.props.auth.isLoggedIn){
                return this.props.history.push("/");
            } else {
                this.setState({"error": "Invalid email and pass"})
            }
        },500)
    }
    render() {
        const {email, password, error} = this.state;
        return (
            <div className={this.props.className}>
                <p className="email-class">Email</p>
                <input value={email} name="email" onChange={this.handleCredChange}></input>
                <p>Password</p>
                <input value={password} name="password" onChange={this.handleCredChange}></input>
                <button onClick={this.validateUser}>send</button>
                <p>Hello</p>
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

const styledLogin = styled(Login)`
    .email-class{
        color: red;
    }
`
export default connect(mapStateToProps, mapDispatchProps)(styledLogin)
