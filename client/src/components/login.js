import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as loginActions from '../services/user/login/loginActions'
import axios from 'axios'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleCredChange = (event) =>{
        setValues({...values, [event.target.name] : event.target.value})
    }
    const dispatch = useDispatch()
    const signIn = () => {
        const cred = {
            email: values.email,
            password: values.password,
        }
        dispatch(loginActions.login())
        axios.post("http://localhost:8080/api/auth/signin", cred).then(response => {
            let token = response.data.accessToken
            localStorage.setItem('jwtToken', token)
            dispatch(loginActions.successMessage(true));
        }).catch(error => {
            dispatch(loginActions.failureMessage())
        })
    }
    const signOut = () => {
        dispatch(loginActions.logout())
        localStorage.removeItem('jwtToken');
        dispatch(loginActions.successMessage(false))
    }
    return (
        <div>
            email
            <input value={values.email} name="email" onChange={handleCredChange}></input>
            Password
            <input value={values.password} name="password" onChange={handleCredChange}></input>
            <button onClick={signIn}>login</button>
            <button onClick={signOut}>logout</button>
        </div>
    )
}
export default Login
