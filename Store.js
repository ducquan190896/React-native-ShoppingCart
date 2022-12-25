import {createStore, combineReducers, applyMiddleware } from "redux"
import ProductReducer from "./reducers/ProductReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import CartReducer from "./reducers/CartReducer"
import thunk from "redux-thunk"

const initalState = {}

const rootReducer = combineReducers({
    PRODUCT: ProductReducer,
    CART: CartReducer

})
const middleware = [thunk]

const Store = createStore(
    
    rootReducer, 
    initalState,
   composeWithDevTools( applyMiddleware(...middleware))
)
export default Store;

// use usecallback with no dependencies, then put it in the useEffect to create a new empty cart at the beginning when load the app