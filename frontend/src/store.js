import { legacy_createStore, createStore, combineReducers, applyMiddleware } from 'redux';
import { productsReducer } from './reducers/productReducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({

})

let initialState = {

}

const middlware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;