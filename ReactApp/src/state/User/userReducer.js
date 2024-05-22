import * as actionTypes from "../actionTypes";

let initialState = {
    user : {
        userName : "Franck",
        password : "password",
        street : "USA",
        mobile : 8884445214

    }
}

// action => type and payload

let userReducer = (state=initialState, action) =>{

    console.log("User Actions ", action)

    switch (action.type){
        case actionTypes.ADD_USER_TO_STORE: 
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, user: action.payload} //new state dispatched to store upon update

        default:
            return state //if no action type matched return default state
                
    }
}
export default userReducer;