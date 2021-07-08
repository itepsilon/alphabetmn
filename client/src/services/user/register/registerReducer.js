import * as registerTypes from './registerTypes'

const initialState = {
    message: ''
}

const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case registerTypes.REGISTER_REQUEST:
            return {
                ...state
            }
        case registerTypes.REGISTER_SUCCESS:
        case registerTypes.REGISTER_FAILURE:
            return {
                message: action.payload
            }
        default:
            return state;
    }
}

export default registerReducer