import React, { Component } from "react";
import "./studentApp.css";
import "./test.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Common/HomeComponent";
import Footer from "./Common/FooterComponenet";
import Header from "./Common/HeaderComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundComponent";
//import StudentComponent from "./Application/Student/StudentContainer";
import StudentHook from "./Application/Student/StudentHookComponenet";
export default class ApplicationComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : "Andrew M"
        }
    }

    updateName = (value)=>{
        

        this.setState({
            name : value
        })


        //evt.preventDefault()
    }

    render(){
        return(
            <Router>
                <div className="topdiv">
                {/* <b>userName : {this.state.name}</b> */}
                <Header studentName={this.state.name}/>
                <Routes>
                    <Route path="/" element={<Home  parentName1={this.state.name} 
                            updateNameInParent={this.updateName} />}/>
                    <Route path="home" element={<Home  parentName1={this.state.name}
                            updateNameInParent={this.updateName} />}/>
                    {/* <Route path="user" element={<UserComponent />}/> */}
                    <Route path="student" element={<StudentHook />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="about/:id" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>                    
                </Routes>
                <Footer/> 
                </div>
            </Router>
        )
    }
}