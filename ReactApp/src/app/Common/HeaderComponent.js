import React from "react";
import { NavLink } from "react-router-dom";

let Header = ()=>{
    return(
        <>
           <h2>Header Componenet</h2>
           <NavLink to="/home" className="button" activeclassname> Home </NavLink>
           <NavLink to="/user" className="button" activeclassname> Login </NavLink>
           <NavLink to="/about" className="button" activeclassname> About </NavLink>
           <NavLink to="/about/2500"  className="button" activeclassname> About with Param</NavLink>
           <hr/>
        </>
    )
}
export default Header;