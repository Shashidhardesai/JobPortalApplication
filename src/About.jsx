import React from 'react'
import Navbar from './Navbar'
import './About.css'

const About = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <div className='above-above'>
    <div className='main-div'>
    <div className='about-div'>
        <h1 className='about-h1'>About Immensphere</h1>
    </div>
    <div className='about-div1'>
        <h2 >Best IT solution company</h2>
        <h3>Immensphere is a pioneer in understanding the precise needs of companies and<br/>
         provide bespoken Cost Effective Solutions. Innovative Client Centrical processes with<br/>
          proactive methods is the motive of our services in Immense Sphere of<br/>
           Indian business communities.</h3>
    </div>
    <div className='about-div2'>
          <h1>----Why Immenshpere?---</h1>
          <div className='div-div-div'>
           <div className='div-div-1'>
             <h3>Startup culture</h3>
             <p >Since we’re a new company, you get a chance of <br/>working with our core team.</p>
             <h3>Learn as you work</h3>
             <p >You wouldn’t be limited to working in just your domain,<br/> you can learn and explore with us.</p>
            </div>
        <div className='div-div-2'>
            <h3>Opportunity to grow</h3>
            <p>If you join us at an early stage, you will grow as <br/>we grow.</p>
             <h3>Joining our founding team</h3>
             <p>Based on your performance and dedication towards the<br/> company, you could be a part of our founding team.</p>
        </div>
        </div>
    </div>
    </div>
    </div>
    <footer className='foot'>
      <img className="lastimage" src="Immen.png" alt="no img" />
      <h3>We’ll help you navigate through the advanced business World by <br/>providing you with the best Digital Solutions to stand a class apart</h3>
       <div>
        <img className='lastimage1' src="FIT.jpg" alt="" />
        
       </div>
    </footer>
    
    </>
  )
}

export default About