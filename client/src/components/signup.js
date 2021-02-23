import React, { Component } from 'react'
import { connect } from 'react-redux';

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
                <button>send</button>
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

// const mapDispatchProps = dispatch =>{
//     return {
//         authenticateUser: (username, password) => dispatch(authenticateUser(username, password))
//     }
// }

// export default connect(mapStateToProps, mapDispatchProps)(Signup)
export default Signup