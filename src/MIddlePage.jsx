import React from 'react'
import './MiddlePage.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MIddlePage = () => {
   useEffect(() => {
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => input.blur());
    }, []);
  return (
    <div className='middle-container'>

        <h1 className='head-1'>Welcome To the Login Page</h1>

         <div className='container-div'>
            <div className='M-div1'>
               <img className='image' src="admin.png" alt="" /><br/>
               <Link to="/Login"> <button>Admin</button></Link> 
            </div>
            <div className='M-div1'>
               <img className='image'src="employee.jpg" alt="" /><br/>
               <Link to="/Login"><button>HR Recruiter</button></Link> 
            </div>
            <div className='M-div1'>
               <img className='image' src="admin.png" alt="" /><br/>
               <Link to="/Login"><button>Employee</button></Link> 
            </div>

        </div>

    </div>
    
    
    
  )
}

export default MIddlePage;