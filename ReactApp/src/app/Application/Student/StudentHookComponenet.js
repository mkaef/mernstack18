import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {SaveStudentToDB, SaveStudentToDBUsingFetch} from "../../../state/Student/studentAction";
// useState - to create state for each option
// useRef - initialize with store/reducer data and then allow to update

let StudentHook = (props)=>{

    
    //subscribe and read from userReducer using useSelector
    let Student = useSelector((store)=>store.studentReducer.student) //reads defined data in reducer 

    // initializes state and returns a callback which we can use to update the state
    let [uName, setStudentName] = useState(Student.studentName) //user.userName - defined in userReducer 
    let [age, setAge] = useState(Student.age)
    let [address, setAddress] = useState(Student.address)
    let [mark, setMark] = useState(Student.mark) 

    let onTextChange = (evt)=>{
        let val = evt.target.value
        setStudentName(val)
        evt.preventDefault()
    }

    //this makes the component as publisher for the data back to store => dispatches 
    let dispatchToDB = useDispatch()

    let loginStudent = (evt)=>{
        let newStudent = {
            studentName : uName,
            age ,
            address,
            mark
        }
        //dispatchToDB(SaveUserToDB(newUser))
        dispatchToDB(SaveStudentToDBUsingFetch(newStudent))
        evt.preventDefault();
    }



    //below is useRef help
    //the reference implemenation
    let sessionName = useRef(null)
    let todaysTopic = useRef(null)

    
    useEffect(()=>{
        console.log("Re render happend")

        sessionName.current.value = Student.studentName
    
        //componentWillUnmount
        return ()=>{
            //clear intervals, api subscription etc that should be removed before we move to next component
            console.log("Makes use effect to work for componentWillUnmount")
        }
    },[]) //if we pass an object to initialize it works as componentDidMount, and executes in create LC, else works as shouldComponent Update

    let readFormData = (evt)=>{
        alert(sessionName.current.value)
        //can be dispatched data back to the store or db
        evt.preventDefault()
    }

    return(
        <>
            <h1>Student Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Student Name</b>
                        <input type="text" className="form-control col-md-6 studentname" 
                                value={uName} //state to update the studentName
                            placeholder="Student Name" onChange={onTextChange} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                            <b>Age</b>
                            <input type="age" className="form-control col-md-6 age" 
                                value={age} 
                            placeholder="age" onChange={(evt)=>setAge(evt.target.value)} maxLength={3}/>
                    </div>
                    <div className="col-md-12">
                            <b>Address </b>
                                <input type="text" className="form-control col-md-6 address" 
                                value={address} 
                            placeholder="Address" onChange={(evt)=>setAddress(evt.target.value)} />
                    </div>
                        
                    <div className="col-md-12">
                        <b>Mark </b>
                        <input type="number" className="form-control col-md-6 mark" 
                            value={mark} placeholder="Mark" maxLength={3}
                            onChange={(evt)=>setMark(evt.target.value)} />
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2 saveStudent"} 
                                    value={"SignIn-Up"} 
                                    onClick={loginStudent}/>
                </div>
            </section>

        {/* uncontrolled way by using ref keyword */}
            <form className={"form col-md-10 studentHook"} onSubmit={readFormData}>                
                <label>
                    <b>Student Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={sessionName}
                    placeholder="Please enter session name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                        <b>Age :</b>
                        <input type="age" className={"form-control col-md-12"} ref={todaysTopic} 
                                placeholder="Please enter today's topic" maxLength={3} required/>
                    </label>
                    <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form> 

        </>
    )
}

export default StudentHook;