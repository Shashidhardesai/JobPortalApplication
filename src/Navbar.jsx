import React from 'react'
import './Navbar.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  useEffect(() => {
    
  }, []);
  return (
    <>
    <nav className="navbar">
        <img className="image-11" src="Immen.png" alt="noimg" />
        <div className='mid-div'>
           <Link to="/FindJobs" ><button className='mid-div-p'>Find Jobs</button></Link>
           <Link to="/About"  ><button className='mid-div-p'>About</button></Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/Login">  <button class="login-btns">Log out</button></Link>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar