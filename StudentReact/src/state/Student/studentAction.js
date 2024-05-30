import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddStudentToStore = (student)=>{
    return {
        type : actionTypes.ADD_STUDENT_TO_STORE, //actiontype to be matched in user reducer
        payload : student //payload which will update the
    }
}

//server call
//to save user to mongo db and do sign-in or sign up
export const SaveStudentToDB = (newStudent)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/student/api/signinup",//uri or end point of singninup api
                newStudent // the user state object we dispatch from the user component
            ).then((collection)=>{
                let loggedStudent = collection.data
                console.log(loggedStudent)
                dispatch(AddStudentToStore(loggedStudent))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}


export const SaveStudentToDBUsingFetch = (newStudent)=>{
    return (dispatch)=>{
        window.fetch("http://localhost:9000/student/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStudent)})
            .then((response)=>response.json())
            .then((studentData)=>{
                console.log(studentData)
                dispatch(AddStudentToStore(studentData))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}