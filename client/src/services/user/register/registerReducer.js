import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from './registerTypes'

const initialState = {
    message: ''
}

const reducer = (state = initialState, action={}) =>{
    switch(action.type){
        case REGISTER_REQUEST:
            return {
                ...state
            }
        case REGISTER_SUCCESS:
        case REGISTER_FAILURE:
            return {
                message: action.payload
            }
        default:
            return state;
    }
}

export default reducer