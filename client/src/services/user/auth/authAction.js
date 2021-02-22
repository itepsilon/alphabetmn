import {LOGIN_REQUEST,SUCCESS,FAILURE} from './authTypes'

export const authenticateUser= (email, password) => {
    return dispatch => {
        dispatch(loginReqiest());
        if(email === "test" && password === "test"){
            dispatch(success(true));
        } else {
            dispatch(failure());
        }
    }
}
const loginReqiest = () => {
    return {
        type: LOGIN_REQUEST
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

