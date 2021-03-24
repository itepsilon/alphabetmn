import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as loginActions from '../services/user/login/loginActions'
const Header = (props) => {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

    const dispatch = useDispatch()

    const signOut = () => {
        dispatch(loginActions.logout())
        localStorage.removeItem('jwtToken');
        dispatch(loginActions.successMessage(false))
    }
    console.log(isLoggedIn)
    const guestLinks = (
        <>  
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
        </>
    )
    
    const userLinks = (
        <>
            <Link to="/" onClick={signOut}>Logout</Link>
            <Link to="/private">PrivatePage</Link>
        </>
    )
    
    return(
        <div className={props.className}>
            <ul>
                <Link to="/">Home</Link>
                {isLoggedIn ? userLinks : guestLinks}
            </ul>
        </div>
    )
}

export default styled(Header)`
    position: relative;
    width: 100%;
    background: cyan;
    height: 50px;
    text-align: center;
    ul{
        margin: 0px;
        a{
            padding-right: 25px;
        }
    }
`
