import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'; 
import navLogo from '../images/navLogo.png';
const Nbar = () => {
    const [isSticky, setSticky] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    
    return (
      <> 
      <div className={`nbar ${isSticky ? 'sticky' : 'no-nbar'}`}>   
        <Navbar fixed='top' bg="white" expand='lg'>  
          <Container>  
            <Navbar.Brand href="#home"><img
                src={navLogo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Janina & Mike logo"
              /></Navbar.Brand>  
            <Navbar.Brand id="cypressTest">Janina & Mike</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
              <Nav className="me-auto" id='cypressTest2'>  
                <Nav.Link href="#home">Home</Nav.Link>  
                <Nav.Link href="#about us">About Us</Nav.Link>
                <Nav.Link href="#schedule">Schedule</Nav.Link>
                <Nav.Link href="#travel">Travel</Nav.Link>
                <Nav.Link href="#registry">Registry</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
                <Nav.Link href="#things to do">Things to do</Nav.Link>
                <Nav.Link href="#faqs">FAQs</Nav.Link>
                <Nav.Link href="#our guests">Our Guests</Nav.Link>
                <Nav.Link href="#rsvps">RSVPs</Nav.Link>
                
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
                  <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                  <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                  <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>   */}
                  {/* <NavDropdown.Divider />  
                  <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>   */}
                {/* </NavDropdown>   */}
              </Nav>  
            </Navbar.Collapse>  
          </Container>  
        </Navbar>  
      </div>
      </>
  )
}

export default Nbar;  