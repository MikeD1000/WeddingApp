
// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';  
// import { useState, useEffect } from 'react';
import axios from 'axios';
import weddingHome from './images/weddingHome.jpg';
import logo from './images/logo.png';
// import navLogo from './images/navLogo.png';
import './App.css';
import ImageCrop from './components/ImageCrop';
import Nbar from './components/Nbar';

function App() {
  

  return (
    <> 
    {/* <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    > */}

    <Nbar/>
    
      <div className='pageContainer' id='home'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <div className="logo">
        <img className="images" src={logo}  alt="logo" /> 
        </div>  
      </div>
     
      <div className='pageContainer' id='about us'> 
        <p className='infoText'>We're excited to invite you to our wedding
        </p>     
      </div>

      <div className='pageContainer' id='schedule'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>Schedule</p>     
      </div> 
    {/* </ThemeProvider> */}
    </>
  )
}

export default App
