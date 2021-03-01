import {REGISTER_SUCCESS,REGISTER_FAILURE,REGISTER_REQUEST} from './registerTypes'
import axios from 'axios'

export const registerUser = (firstName, lastName, email, password) => {
    const cred = {
        firstName: firstName,
        lastName: lastName,
        email:email,
        password: password,
        role: ["user"]
    }
    return dispatch => {
        dispatch({
            type: REGISTER_REQUEST
        })
        axios.post("http://localhost:8080/api/auth/signup", cred).then(response => {
            dispatch(successMessage(response.data.message));
        }).catch(error => {
            dispatch(failureMessage(error.response.data.message))
        })
    }
}


const successMessage = message => {
    return {
        type: REGISTER_SUCCESS,
        payload: message
    }
}


const failureMessage = message => {
    return {
        type: REGISTER_FAILURE,
        payload: message
    }
}