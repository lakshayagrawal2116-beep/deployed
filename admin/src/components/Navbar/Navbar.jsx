import React from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
const Navbar = () => {
  return (
    <div className='navbar'>
        <img style={{width:"60px"}} className='logo' src='/Ge_logo.png' alt=''/>
        <img className='profile' src={assets.profile_image} alt=''/>
    </div>
  )
}

export default Navbar