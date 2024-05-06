import React, { Component } from "react";

export default class ApplicationComponent extends Component {

    render(){
        let name = "Eric Medoua!!!"
        return(
            <div>
                <h4>This is main react application Component</h4>
                <b>{name}</b>
            </div>
        )
    }
}