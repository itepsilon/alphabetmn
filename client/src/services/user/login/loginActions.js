import * as loginTypes from './loginTypes'

export const login = () => {
    return {
        type: loginTypes.LOGIN_REQUEST
    }
}

export const logout = () => {
    return {
        type: loginTypes.LOGOUT_REQUEST
    }
}

export const successMessage = (isLoggedIn) => {
    return {
        type: loginTypes.LOGIN_SUCCESS,
        payload: isLoggedIn
    }
}

export const failureMessage = () => {
    return {
        type: loginTypes.LOGIN_FAILURE,
        payload: false
    }
}

