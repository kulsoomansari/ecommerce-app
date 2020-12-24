import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/ecom.svg";

export default function Navbar() {
    return (
        <div className='navbox'>
           <div className='leftSide'>
               <img src={logo} alt=" "/>
           </div>
         <div className='rightSide'>
             <Link to='/signup' className='navlink'>SIGNUP</Link>
             <Link to='/login' className='navlink'>LOGIN</Link>
            </div>
         </div>
    )
}
