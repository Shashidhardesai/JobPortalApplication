import React from 'react'
import './Hrpage.css'
import { Link } from 'react-router-dom'

const HrPage = () => {
  return (
    <>
    <div className='body-body'>
    <nav className="main-navbar">
        <img className="image-1" src="Immen.png" alt="noimg" />
        <div className='middle-div'>
           <Link to="/Postedjobs" ><button className='middle-div-p'>Posted Jobs</button></Link>
           <Link  to="/StudentResume"><button className='middle-div-p'>Student Applicaton</button></Link>
           <Link to="/PostJobs"><button className='middle-div-p'>Post Jobs</button></Link>
        </div>
        <div className="navbar-btn">
          <Link to="/HrLogin">  <button className="logout-button">Log out</button></Link>
        </div>
    </nav>
    <hr className='HrLine' />
    
    <div className='division-sec'>
    <div className='division-2'>
         <h2 className='division-2-h2'>
           “I am convinced that nothing we do is more<br/>
            important than hiring and developing people.<br/>
             At the end of the day, you bet on people,<br/>
              not on strategies.”
         </h2>
         <h3 className='division-2-h3'>—Lawrence Bossidy, retired executive <br/>
          with General Electric and AlliedSignal</h3>
    </div>
    </div>
    </div>
    </>
  )
}

export default HrPage