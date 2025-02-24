import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/logo.JPG'
import "./navbarStyles.css";
const Login_header = () => {
  return (
    <>
      <Navbar style={{backgroundColor:"#99ddff"}} variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img src="https://media-hosting.imagekit.io//ccd44ae729684701/logo.JPG?Expires=1835025244&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qzQrbH0sMU2eTLUAPEIDpK0l3tQtHRBJEqkrYQHydJ9MGQPbVo9aBPkpCWjzc-h2uiQS7917i196BB9osSWBRMLtnfUw6wnshofzDIL12Jg0Qnn7QoJgRau3qVBNRBX-pbBHx9YAjK4y6x1Vew1yk5TGHVo94qmT7m0nCGXdC6BolMtSyw6H3NMujb5NaF0nVYevheVKVbjuQCnlbU8ViXHS3MLqMkfwFm0cQuPOvPwV3TmgDYYBre-sWW-dgSIzC~z-UL2ohBxqNbJODlW0SKOISS~eU1iTJxWgs0w-SGAP3RNB0fRp5gtG4BVOJqkTvP~o36v8JtXt9ksc5TPI5Q__" alt="Logo" height="80px"  width="100px" />
           <span style={{marginLeft:"30px", fontFamily:"monospace" ,fontFeatureSettings:"revert-layer",fontSize:"50px",letterSpacing:"20px", color:"#003366"}}>Ficatio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={{color:"#333399"}} className="  fs-4 nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#parts" style={{color:"#333399"}} className="  fs-4 nav-link">
                Parts
              </Nav.Link>
              <Nav.Link href="#about" style={{color:"#333399"}} className="  fs-4 nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#contact" style={{color:"#333399"}} className="  fs-4 nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Login_header;
