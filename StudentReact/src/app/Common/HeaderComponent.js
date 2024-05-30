import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";//replacement of mapStateToProps


let Header = (props)=>{
      
    //allows us to read data from store/reducer as we do with mapStateToProps
    //becomes subscriber of user state from user reducer

    const student = useSelector((store)=>store.studentReducer.student)
    
    console.log(student)
    
    const usrName = student && student.studentName ? student.studentName : props.studentName
    


    return(
        <>
           {/*<h2>Header Componenet</h2>
           <h3>{props.userName}</h3>
           <NavLink to="/home" className="button" activeclassname="true"> Home </NavLink>
           <NavLink to="/user" className="button" activeclassname="true"> Login </NavLink>
           <NavLink to="/about" className="button" activeclassname="true"> About </NavLink>
           <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink>*/}
            
            <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>
            
            <div>
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/student"  className="button" activeclassname="true"> Login </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                {/* <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink> */}
            </div>

           <hr/>
        </>
    )
}
export default Header;