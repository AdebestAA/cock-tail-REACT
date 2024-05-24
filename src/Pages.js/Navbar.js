import React from 'react'
import logo from "../logo.svg"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <nav>
    <img src={logo} alt="logo" />
    <div className='links-nav'>
<Link to={"/"}>Home</Link>
<Link to={"about"}>About</Link>
    </div>
   </nav>
  )
}

export default Navbar
