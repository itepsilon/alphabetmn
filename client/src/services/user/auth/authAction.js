import {LOGIN_REQUEST,SUCCESS,FAILURE} from './authTypes'
import axios from 'axios'
export const authenticateUser= (username, password) => {
    const cred = {
        username: username,
        password: password
    }
    console.log(cred)
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

