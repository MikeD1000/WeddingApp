// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";
import weddingHome from "./images/weddingHome.jpg";
import castle from "./images/castle.jpg";
import logo from "./images/logo.png";
// import navLogo from './images/navLogo.png';
import "./App.css";
import ImageCrop from "./components/ImageCrop";
import Nbar from "./components/Nbar";
import Signup from "./components/SignupForm";
import Loginout from "./components/LoginoutForm";
import CreateUserProfile from "./components/CreateUserProfile";
import WorldMap from "./components/MapBox";
import ScheduleComponent from "./components/Schedule";
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
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="text-center">
                  <h2>Thank You for Being a Part of Our Special Day!</h2>
                  <p className="lead">
                    We are incredibly grateful to have you spend our wedding day
                    with us. Your presence will make our celebration even more
                    memorable. Thank you for your love, support, and well
                    wishes. We look forward to enjoying the festivities with
                    you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pageContainer" id="schedule">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Schedule</p>
        </div>
        <div className="pageContainer">
          <ScheduleComponent />
        </div>

        <div className="pageContainer" id="travel">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Travel</p>
        </div>
        <div className="pageContainer" id="about us">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2>How to get here</h2>
                <div className="text-start">
                  <p className="lead">
                    Upon arriving at Warsaw Airport, you'll be greeted by the
                    vibrant energy of Poland's capital city, setting the stage
                    for an unforgettable journey to a fairytale wedding
                    destination. As you step off the plane and into the bustling
                    terminal, anticipation mounts for the enchanting celebration
                    awaiting you. After collecting your luggage and passing
                    through customs, a sense of excitement fills the air as you
                    make your way to the designated meeting point for the bus
                    pick-up to the wedding venue—a majestic castle nestled in
                    the picturesque countryside near Warsaw.
                    <br />
                    <br />
                    Embarking on this scenic journey, you'll traverse through
                    charming landscapes adorned with lush greenery and historic
                    landmarks, each moment building anticipation for the
                    grandeur that lies ahead. As the bus makes its way along
                    winding roads and through quaint villages, the anticipation
                    of arriving at the castle venue heightens with every passing
                    mile.
                    <br />
                    <br />
                    Finally, as the bus pulls up to the castle's grand entrance,
                    you're greeted by the sight of towering turrets, ancient
                    stone walls, and sprawling gardens—a sight straight out of a
                    fairytale. Stepping onto the cobbled courtyard, you're
                    enveloped in the rich history and romantic ambiance of the
                    castle, setting the stage for a wedding celebration that
                    promises to be nothing short of magical.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pageContainer" id="registry">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Registry</p>
        </div>
        <div className="pageContainer" id="registry">
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="text-center">
              <h2>Amazon Gift Registry</h2>
              <p className="lead">Find our registry on Amazon.com</p>
              <a
                href="https://www.amazon.com"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Amazon.com
              </a>
            </div>
          </div>
        </div>

        <div className="pageContainer" id="venue">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">The Venue</p>
        </div>
        <div className="pageContainer">
          <ImageCrop>
            <img className="images" src={castle} alt="castle" />
          </ImageCrop>
        </div>

        <div className="pageContainer" id="things to do">
          <ImageCrop>
            <img className="images" src={weddingHome} alt="plant" />
          </ImageCrop>
          <p className="imageCenterText">Things to do</p>
        </div>
        <div className="pageContainer" id="registry">
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="text-center">
              <h2>Warsaw Board of Tourism</h2>
              <p className="lead">Find local activities at this official website</p>
              <a
                href="https://warsawtour.pl/en/main-page/"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fun Button
              </a>
            </div>
          </div>
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
            <CreateUserProfile
              handleForm={handleForm}
              formSubmitted={formSubmitted}
            />
          </div>
        ) : null}
      </ThemeProvider>

      <div id="mapContainer">
        <p className="infoText">Wedding Worldwide</p>
        <div className="container">
          <div className="text-center">
            <p className="lead">
              You're from all over the world and you chose to be here with us.
              We appreciate that.
            </p>
          </div>
        </div>
        <WorldMap token={token} formSubmitted={formSubmitted} />
      </div>
    </>
  );
}

export default App;
