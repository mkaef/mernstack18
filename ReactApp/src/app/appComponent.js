import React, { Component } from "react";
import "./test.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
//import TestComponent from "./CommonComponent/test";
import Home from "./Common/HomeComponent";
import Footer from "./Common/FooterComponenet";
import Header from "./Common/HeaderComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundComponent";


export default class ApplicationComponent extends Component {
      //props - is the set of properties html + js which needs to be available in every component
    // also a parent component can share data to child using props

     constructor(props){
        super(props);//syncs the props values to parent/base class

        //define the state and initialize the state
        this.state = {
          name : "Eric Medoua!!!"
      }
     }

     updateName = (evt)=>{
          
          alert("Updating the name")

         // let nameElem = document.getElementById("name_element")
          //nameElem.innerText = "Andrew"
          //nameElem.innerText = "Tica"

          //this.state.name = "Timm" //will update but cannot show in the UI
          //console.log(this.state.name)

          //update state to create new virtual dom using setState - api
          this.setState({
               name : "Cedric Ipenda"
          })

          evt.preventDefault()
     }

    render(){
        //let name = "Eric Medoua!!!"
        return(
          <Router className="topdiv">
               <Header/>
               <Routes> 
                    <Route path="/" element={<Home  parentName={this.state.name}/>}/>
                    <Route path="home" element={<Home  parentName={this.state.name}/>}/>
                    <Route path="about" element={<About />}/>
                    <Route path="about/:id" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>    
               </Routes>
               <Footer/>
            </Router>
        )
    }
}






//render(){
//     //let name = "Eric Medoua!!!"
//     return(
//       <Router className="topdiv">
//         {/*<div className="topdiv">*/}
//
//             {/*<h4>This is main react application Component</h4>
//             <h5><b id="name_element">{this.state.name}</b></h5>
//             <TestComponent/>
//             <button onClick={this.updateName}>Update Name</button>
//             */}
//
//            <Header/>
//            <Home parentName={this.state.name}/>
//            <About/>
//            <Footer/>
//            
//         {/*</div>*/}
//         </Router>
//     )
// }
//}




