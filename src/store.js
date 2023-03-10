import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from './Reducer/restreducer'

//Create reducer & middleware
const reducers = combineReducers({ restaurantReducer:restaurantListReducer })
const middleware = [thunk]

// to Create store
const store = createStore(reducers,applyMiddleware(...middleware));

export default store;

