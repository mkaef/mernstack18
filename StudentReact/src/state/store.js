import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import studentReducer from "./Student/studentReducer";
//import productReducer from  "./Product/productReducer"; //another reducer for product component

//we can add multiple reducers and combine them togather to have one root reducer and add it to store
let rootReducer = combineReducers({  
    studentReducer, //studentReducer : studentReducer
    //productReducer
})

//create or configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
)