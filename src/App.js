
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import img1  from './images/img5.jpg';
import Navbar from './Navbar';


function App() {
  return (
    
  <div className='all home'>
  <Navbar/>
  
    <img src={img1} alt="Background" className="full-screen-image" />
    <h1>With Creat Design</h1>
    <br/>
    <h3>Comes Creat Response</h3>
    <br/>
    <h6>make a beautiful website-just the way you want it.</h6>
    <br/>
    <button className='button1'>Learn More</button>
    <button className='button2'>Get Started</button>
    </div>
    
    
);
    
}




export default App;



  


