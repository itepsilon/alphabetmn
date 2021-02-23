import React, { Component } from 'react'
import { connect } from 'react-redux';
import {registerUser} from '../services/index'
class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = this.initialState;
    }

    initialState = {
        email:'',
        username: '',
        password: '',
        error:''
    }

    handleCredChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    registerUser = () => {
        this.props.registerUser(this.state.username, this.state.email, this.state.password)
        setTimeout(() => {
            // return this.props.history.push("/");
        }, 1000)
    }
    render() {
        const {username, password, email, error} = this.state;
        return (
            <div>
                username
                <input value={username} name="username" onChange={this.handleCredChange}></input>
                email
                <input value={email} name="email" onChange={this.handleCredChange}></input>
                Password
                <input value={password} name="password" onChange={this.handleCredChange}></input>
                <button onClick={this.registerUser}>send</button>
                
                <p>{this.props.register.message}</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        register:state.register
    }
}

const mapDispatchProps = dispatch =>{
    return {
        registerUser: (username, email, password) => dispatch(registerUser(username, email, password))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Signup)