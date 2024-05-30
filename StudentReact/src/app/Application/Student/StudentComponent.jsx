import React, { Component } from "react";
//import { connect } from "react-redux";
//import { AddUserToStore } from "../../../state/User/userAction";


export default class StudentComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            studentName : props.student.studentName, // we need to read from store using props through container
            age : props.student.age,
            address : props.student.address,
            mark : props.user.mark
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("studentname")){
            this.setState({ studentName : value })
        }else if (classList.contains("age")) {
            this.setState({ age : value })
        } else if (classList.contains("address")) {
            this.setState({ address : value })
        } else {
            this.setState({ mark : value })
        }    

        evt.preventDefault();
    }

    loginStudent = (evt)=>{        
        let newStudent = this.state;
        alert("Logged Innn -"+JSON.stringify(newStudent))

        //upon user action to login we send user to store
        //this.props.addUser(newUser);
        
        this.props.loginStudent(newStudent) //will go to usercontainer => useraction => server(db) => store => userreducer

        evt.preventDefault();
    }


    render(){
        return(
            <>
                <h1>Student Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Student Name</b>
                            <input type="text" className="form-control col-md-6 username" 
                                    value={this.state.studentName} 
                                placeholder="Student Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Age</b>
                                    <input type="number" className="form-control col-md-6 pass" value={this.state.password} 
                                    placeholder="Age" onChange={this.onTextChange} maxLength={3}/>
                            </div>
                            <div className="col-md-12">
                            <b>Adress </b>
                                <input type="text" className="form-control col-md-6 street" value={this.state.address} 
                                        placeholder="Address" onChange={this.onTextChange} />
                            </div>
                        
                            <div className="col-md-12">
                                <b>Mark </b>
                                <input type="number" className="form-control col-md-6 mobile" value={this.state.mark} 
                                placeholder="Mark" maxLength="3"
                                onChange={this.onTextChange} />
                            </div>

                            <input type="button" className={"btn btn-primary col-md-2 saveStudent"} 
                                    value={"SignIn-Up"} 
                                    onClick={this.loginStudent}/>
                                    
                        </div>
                </section>
            </>
        )
    }
}
