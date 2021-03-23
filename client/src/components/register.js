import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser,successMessage, failureMessage } from '../services/user/register/registerActions'

import axios from 'axios'
const Register = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const handleCredChange = (event) =>{
        setValues({...values, [event.target.name] : event.target.value})
    }
    const dispatch = useDispatch()
    const message = useSelector(state => state.register.message)
    const signUp = () => {
        const cred = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            role: ["user"]
        }
        dispatch(registerUser())
        axios.post("http://localhost:8080/api/auth/signup", cred).then(response => {
            dispatch(successMessage(response.data.message));
        }).catch(error => {
            if(error.response){
                dispatch(failureMessage(error.response.data.message))
            } else {
                dispatch(failureMessage("Server is down"))
            }
        })
    }
    return (
        <div>
            firstName
            <input value={values.firstName} name="firstName" onChange={handleCredChange}></input>
            lastName
            <input value={values.lastName} name="lastName" onChange={handleCredChange}></input>
            email
            <input value={values.email} name="email" onChange={handleCredChange}></input>
            Password
            <input value={values.password} name="password" onChange={handleCredChange}></input>
            <button onClick={signUp}>send</button>
            <p>{message}</p>
        </div>
    )
}
export default Register
