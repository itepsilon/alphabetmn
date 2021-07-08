import * as signUp from './registerTypes'

export const registerUser = () => {
    return {
        type: signUp.REGISTER_REQUEST
    }
}

export const successMessage = (message) =>{
    return {
        type: signUp.REGISTER_SUCCESS,
        payload: message
    }
}


export const failureMessage = (message) =>{
    return {
        type: signUp.REGISTER_FAILURE,
        payload: message
    }
}