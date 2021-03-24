import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import authToken from './utils/authToken'
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

if(localStorage.jwtToken){
    authToken(localStorage.jwtToken);
}

export default store