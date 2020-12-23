import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/ecom.svg";

export default function Navbar() {
    return (
        <div className='navbox'>
           <div className='leftside'>
               <img src={logo} alt='' />
          </div> 
           <div className='rightside'>
               <Link to='/signup' className='navlinks'>SIGNUP</Link>
               <Link to='/login' className='navlinks'>LOGIN</Link>
           </div> 
        </div>
    )
}
