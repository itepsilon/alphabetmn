import * as loginTypes from './loginTypes'

const initialState = {
    isLoggedIn: ''
}

const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case loginTypes.LOGIN_REQUEST:
        case loginTypes.LOGOUT_REQUEST:
            return {
                ...state
            }
        case loginTypes.LOGIN_SUCCESS:
        case loginTypes.LOGIN_FAILURE:
            return {
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
}

export default registerReducer