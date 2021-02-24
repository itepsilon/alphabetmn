import {LOGIN_REQUEST,SUCCESS,FAILURE, LOGOUT_REQUEST} from './authTypes'
import axios from 'axios'
export const authenticateUser = (email, password) => {
    const cred = {
        email: email,
        password: password
    }
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        });
        axios.post("http://localhost:8080/api/auth/signin", cred).then(response => {
            let token = response.data.accessToken
            localStorage.setItem('jwtToken', token)
            dispatch(success(true));
        }).catch(error => {
            dispatch(failure());
        })
    }
}


export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT_REQUEST
        })
        localStorage.removeItem('jwtToken');
        dispatch(success(false))
    }
}

const success = isLoggedIn => {
    return {
        type: SUCCESS,
        payload: isLoggedIn
    }
}


const failure = () => {
    return {
        type: FAILURE,
        payload: false
    }
}

