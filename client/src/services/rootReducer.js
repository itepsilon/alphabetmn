import { combineReducers } from 'redux'
import loginReducer from './user/login/loginReducer'
import registerReducer from './user/register/registerReducer'
const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})

export default rootReducer