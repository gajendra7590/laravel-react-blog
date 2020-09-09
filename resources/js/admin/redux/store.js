import {createStore,applyMiddleware } from 'redux'; 
import thunk from "redux-thunk";  

//custom imports
import commonReducer from './reducers/rootReducer';


const store = createStore(commonReducer, applyMiddleware(thunk) );
export default store;