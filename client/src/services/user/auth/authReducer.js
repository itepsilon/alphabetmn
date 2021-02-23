import {LOGIN_REQUEST,SUCCESS,FAILURE,LOGOUT_REQUEST} from './authTypes'

const initialState = {
    isLoggedIn: ''
}

const reducer = (state = initialState, action={}) =>{
    switch(action.type){
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state
            }
        case SUCCESS:
        case FAILURE:
            return {
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
}

export default reducer