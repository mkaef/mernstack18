//action - is an object with two properties - type and payload
import * as actionTypes from "../actionTypes";

export const AddUserToStore = (user)=>{
    return {
        type : actionTypes.ADD_USER_TO_STORE, //actiontype to be matched in user reducer
        payload : user //payload which will update the user state
    }
}