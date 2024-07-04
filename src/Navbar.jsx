import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <img className="image-11" src="https://immensphere.com/static/media/navlogo.8f810c3ef88360407105.png" alt="noimg" />
        <div className='mid-div'>
           <Link to="/FindJobs" ><button className='mid-div-p'>Find Jobs</button></Link>
           {/* <Link  ><button className='mid-div-p'>Companies</button></Link> */}
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