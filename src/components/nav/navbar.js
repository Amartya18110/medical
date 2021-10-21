import React from 'react'
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navber = ()=>{
    return(
        <div className="mainDiv">
            <ul>
                <li className='logo'>HOSPITAL INFO</li>
                <li className="navbarHover"><NavLink exact to='/'>Home</NavLink></li>
                <li className="navbarHover"><NavLink exact to ='/aboutus'>About Us</NavLink></li>
            </ul>
        </div>
    )
}

export default Navber