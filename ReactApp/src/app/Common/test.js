import React, { Component } from "react";
//import "./test.css";
export default class TestComponent extends Component {

    render(){
        //let name = "Eric Medoua!!!"
        return(
            <div className="topdiv">
                
                <form>
                <div className="col-md-12">
                    <label className="col-md-4">User name</label>
                    <input className="col-md-6" type="text" maxLength={14} 
                         placeholder="Please type here user name"></input>

                    <hr/>
                    <input className="col-md-6" type="email" maxLength={14} 
                         placeholder="Please type here..."></input>

                    <hr/>
                    <input className="col-md-6" type="tel" maxLength={14} 
                         placeholder="Please type here telephone..."></input>

                   <hr/>
                    <input className="col-md-6" type="date" maxLength={14} 
                         placeholder="Please type here telephone..."></input>
                   <hr/>
                   <input className="col-md-6" type="address" maxLength={14} 
                         placeholder="Please type here address"></input>

                    <hr/>
                    <input className="col-md-6" type="checkbox" maxLength={14} 
                         placeholder="Please type here telephone..."></input>

                    <hr/>
                    <input className="col-md-6" type="color" maxLength={14} 
                         placeholder="Please type here telephone..."></input>

                    <hr/> 
                         <button type="button">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}