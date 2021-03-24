import * as loginTypes from './loginTypes'

const initialState = {
    isLoggedIn: ''
}

if(localStorage.getItem('jwtToken')){
    initialState.isLoggedIn = true;
    // check if token is expired?
}
const loginReducer = (state = initialState, action) => {
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

export default loginReducer