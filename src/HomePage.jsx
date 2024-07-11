import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {

  useEffect(() => {
    document.documentElement.blur(); 
  }, []);
  
  return (
    <div className='body-main'>
      <div className='home-head'>
           <h1>Welcome to Job Portal Application</h1>
           <div className='buttons'>
                 <Link to="/MiddlePage">
                 <button className='button1'>Login </button>
                 </Link>
                 <Link to="/SignUp">
                 <button className='button1'>Sign Up</button>
                 </Link>
            </div>
      </div>
      <div className='division2'>
            "Success is not the key to happiness.<br/>
             Happiness is the key to success. If<br/>
             you love what you are doing, you <br/>
             will be successful." – Albert Schweitzer
      </div>
     
    </div>
  );
};

export default HomePage;
