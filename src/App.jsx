
// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';  
import { useState, useEffect } from 'react';
import axios from 'axios';
import weddingHome from './images/weddingHome.jpg';
import logo from './images/logo.png';
// import navLogo from './images/navLogo.png';
import './App.css';
import ImageCrop from './components/ImageCrop';
import Nbar from './components/Nbar';
import Signup from './components/SignupForm';
import Loginout from './components/LoginoutForm';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { api } from './utilities'

function App() {
// const {user, setUser} = useState(null)

App.jsx
  const test_connection = async() => {
    const response = await api.get("test/")
    console.log(response)
  }

  useEffect(()=>{
    test_connection()
  },[])

  return (
    <> 
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">

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
        <p className='infoText'>We're excited to invite you to our wedding, XYZ about us
        </p>     
      </div>

      <div className='pageContainer' id='schedule'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>Schedule</p>     
      </div> 
      <div className='pageContainer'> 
        <p className='infoText'>Stuff about the schedule
        </p>     
      </div>
    
      <div className='pageContainer' id='travel'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>Travel</p>     
      </div> 
      <div className='pageContainer'> 
        <p className='infoText'>Stuff about travel
        </p>     
      </div>

      <div className='pageContainer' id='registry'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>Registry</p>     
      </div> 
      <div className='pageContainer'> 
        <p className='infoText'>Stuff about the registry
        </p>     
      </div>

      <div className='pageContainer' id='gallery'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>Gallery</p>     
      </div> 
      <div className='pageContainer'> 
        <p className='infoText'>Photo gallery
        </p>     
      </div>

      <div className='pageContainer' id='things to do'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>Things to do</p>     
      </div> 
      <div className='pageContainer'> 
        <p className='infoText'>Stuff to do
        </p>     
      </div>
    
      <div className='pageContainer' id='faqs'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>FAQs</p>     
      </div> 
      <div className='pageContainer'> 
        <p className='infoText'>Several important FAQs
        </p>     
      </div>
    
      <div className='pageContainer' id='our guests'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>Our Guests</p>     
      </div> 
      <div className='pageContainer'> 
        <p className='infoText'>Carousel of guest pics w/ info from RSVP form
        </p>     
      </div>

      <div className='pageContainer' id='rsvps'> 
        <ImageCrop>
        <img className="images" src={weddingHome}  alt="plant"/> 
        </ImageCrop>
        <p className='imageCenterText'>RSVPs</p>     
      </div> 
      <div className='pageContainer'>
      <p className='infoText'>Signup Form</p> 
      <Signup></Signup>
      </div>
      <div className='pageContainer'>
      <p className='infoText'>Login/Logout Form</p> 
      <Loginout></Loginout>
      </div>

    </ThemeProvider>
    </>
  )
}

export default App
