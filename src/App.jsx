// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";
import weddingHome from "./images/weddingHome.jpg";
import logo from "./images/logo.png";
// import navLogo from './images/navLogo.png';
import "./App.css";
import ImageCrop from "./components/ImageCrop";
import Nbar from "./components/Nbar";
import Signup from "./components/SignupForm";
import Loginout from "./components/LoginoutForm";
import CreateUserProfile from "./components/CreateUserProfile";
import WorldMap from "./components/MapBox";

import ThemeProvider from "react-bootstrap/ThemeProvider";
import { api } from "./utilities";

function App() {
  // const [fetchedApiKey, setFetchedApiKey] = useState(null);
  const [token, setToken] = useState("");
  const handleToken = (token) => {
    setToken(token);
  };
 
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleForm = () => {
    setFormSubmitted(!formSubmitted);
  };

  App.jsx;
  const test_connection = async () => {
    const response = await api.get("test/");
    console.log(response);
  };

  useEffect(() => {
    test_connection();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get('geocode/get_api_key/');
  //       const apiKey = response.data.google_api_key;
  //       setFetchedApiKey(apiKey); // Assuming the state variable is called `googleApiKey`

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Nbar />

        <div className="pageContainer" id="home">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <div className="logo">
            <img className="images" src={logo} alt="logo" />
          </div>
        </div>

        <div className="pageContainer" id="about us">
          <p className="infoText">
            We're excited to invite you to our wedding, XYZ about us
          </p>
        </div>

        <div className="pageContainer" id="schedule">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Schedule</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">Stuff about the schedule</p>
        </div>

        <div className="pageContainer" id="travel">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Travel</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">Stuff about travel</p>
        </div>

        <div className="pageContainer" id="registry">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Registry</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">Stuff about the registry</p>
        </div>

        <div className="pageContainer" id="gallery">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Gallery</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">Photo gallery</p>
        </div>

        <div className="pageContainer" id="things to do">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Things to do</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">Stuff to do</p>
        </div>

        <div className="pageContainer" id="faqs">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">FAQs</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">Several important FAQs</p>
        </div>

        <div className="pageContainer" id="our guests">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Our Guests</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">
            Carousel of guest pics w/ info from RSVP form
          </p>
        </div>

        <div className="pageContainer" id="rsvps">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">RSVPs</p>
        </div>
        <div className="pageContainer">
          <p className="infoText">Signup Form</p>
          <Signup handleToken={handleToken} />
        </div>
        <div className="pageContainer">
          <p className="infoText">Login/Logout Form</p>
          <Loginout token={token} handleToken={handleToken} />
        </div>
        {token !== "" ? (
          <div className="pageContainer2">
            <p className="infoText">Create User Profile Form</p>
            <CreateUserProfile handleForm={handleForm} formSubmitted={formSubmitted}/>
          </div>
        ) : null}
      </ThemeProvider>
      
      <div id="mapContainer">
        <p className="infoText">Wedding Worldwide</p>
        <WorldMap token={token} formSubmitted={formSubmitted} />
      </div>
      
    </>
  );
}

export default App;
