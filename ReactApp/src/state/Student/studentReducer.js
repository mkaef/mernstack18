import * as actionTypes from "../actionTypes";

let initialState = {
    student : {
        studentName : "Dummy",
        age : 18,
        address : "somewhere on earth",
        mark :89
    }
}

// action => type and payload

let studentReducer = (state=initialState, action)=>{

    console.log("Student Actions ", action)

    switch (action.type) {

        case actionTypes.ADD_STUDENT_TO_STORE:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, student: action.payload} //new state dispatched to store upon update
        default:
            return state //if no action type matched return default state
    }
}

export default studentReducer;