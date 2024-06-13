import React, { Component } from 'react';
import './test.css';
import './app.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
//import TestComponent from "./CommonComponent/test";
import Home from './Common/HomeComponent';
import Footer from './Common/FooterComponenet';
import Header from './Common/HeaderComponent';
import About from './Common/AboutComponent';
import NotFound from './Common/NotFoundComponent';
//import StudentComponent from "./Application/Student/StudentComponent";
import UserComponent from './Application/User/UserContainer';
import StudentHook from './Application/Student/StudentHookComponenet';
import UserHook from './Application/User/UserHookComponenet';
import ProductComponent from './Application/Product/productComponent';
import CartComponent from './Application/Cart/CartComponenet';
import CheckoutComponent from './Application/Checkout/CheckoutComponent';
import CouponComponent from './Application/Coupon/CouponComponent';

export default class ApplicationComponent extends Component {
  //props - is the set of properties html + js which needs to be available in every component
  // also a parent component can share data to child using props

  constructor(props) {
    super(props); //syncs the props values to parent/base class

    //define the state and initialize the state
    this.state = {
      name: 'Eric Medoua!!!',
    };
  }

  //the parameter will be accepted here when function executes in child component
  //updateName = (evt)=>{
  updateName = (value) => {
    //alert("Updating the name!!")

    // let nameElem = document.getElementById("name_element")
    //nameElem.innerText = "Andrew"
    //nameElem.innerText = "Tica"

    //this.state.name = "Timm" //will update but cannot show in the UI
    //console.log(this.state.name)

    //update state to create new virtual dom using setState - api
    this.setState({
      //name : "Cedric Ipenda"
      name: value,
    });

    //evt.preventDefault()
  };

  render() {
    //let name = "Eric Medoua!!!"
    return (
      <Router>
        <div className="topdiv">
          {/*<b>userName={this.state.name}</b> */}
          <Header userName={this.state.name} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  parentName1={this.state.name}
                  updateNameInParent={this.updateName}
                />
              }
            />
            <Route
              path="home"
              element={
                <Home
                  parentName1={this.state.name}
                  updateNameInParent={this.updateName}
                />
              }
            />
            {/*<Route path="user" element={<UserComponent />}/>*/}
            <Route path="user" element={<UserHook />} />
            <Route path="student" element={<StudentHook />} />
            <Route path="product" element={<ProductComponent />} />
            <Route path="checkout" element={<CheckoutComponent />} />
            <Route path="coupon" element={<CouponComponent />} />
            <Route path="cart" element={<CartComponent />} />
            <Route path="about" element={<About />} />
            <Route path="about/:id" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
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
