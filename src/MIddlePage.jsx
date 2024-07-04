import React from 'react'
import './MiddlePage.css'
import { Link } from 'react-router-dom';

const MIddlePage = () => {
  return (
    <>
    <div className='container-1'>

        <h1 className='head-1'>Welcome To the Login Page</h1>
     <div className='container-div-1'>
        <div className='M-div1'>
            <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7-xj57PKRscu-i1Rk9jY3ro2B5XsmhSn8g&s" alt="" /><br/>
          <Link to="/AdminLogin"> <button>Admin</button></Link> 
        </div>
        <div className='M-div1'>
            <img className='image'src="https://icon-library.com/images/clients-icon/clients-icon-0.jpg" alt="" /><br/>
           <Link to="/HrLogin"><button>HR Recruiter</button></Link> 
        </div>
        <div className='M-div1'>
            <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7-xj57PKRscu-i1Rk9jY3ro2B5XsmhSn8g&s" alt="" /><br/>
           <Link to="/Login"><button>Employee</button></Link> 
        </div>

        </div>
    </div>
    
    
    
    </>
  )
}

export default MIddlePage;