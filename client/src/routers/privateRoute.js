import React from 'react'
import { useSelector } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import {isLogin} from '../services/utils/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (isLogin() ? <Component {...props} /> :  
    <Redirect to="/" />)} />                         
)

export default PrivateRoute
