import React, { Component } from "react";
import "./index.css";
import SuccessChild from "./common/SuccessChild";
import SuccessStory from "./common/SuccessStory";
import UserSignIn from "./common/UserSignIn";
import { UsageState } from "react";

class SuccessComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'success'
        }
    }
    render(){
        return <h2>It is a class component called, {this.state.name}</h2>
    }
    

}
export default SuccessComponent;