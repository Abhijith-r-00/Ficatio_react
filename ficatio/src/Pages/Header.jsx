import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ setShow, logined, setIsLogined }) => {
  const navigate = useNavigate();
  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("username");
 
    navigate("/"); // Redirect to Content Page
    
    setIsLogined(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#003366" }}
        variant="dark"
        className="py-3 shadow-sm"
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src="https://media-hosting.imagekit.io//ccd44ae729684701/logo.JPG?Expires=1835025244&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qzQrbH0sMU2eTLUAPEIDpK0l3tQtHRBJEqkrYQHydJ9MGQPbVo9aBPkpCWjzc-h2uiQS7917i196BB9osSWBRMLtnfUw6wnshofzDIL12Jg0Qnn7QoJgRau3qVBNRBX-pbBHx9YAjK4y6x1Vew1yk5TGHVo94qmT7m0nCGXdC6BolMtSyw6H3NMujb5NaF0nVYevheVKVbjuQCnlbU8ViXHS3MLqMkfwFm0cQuPOvPwV3TmgDYYBre-sWW-dgSIzC~z-UL2ohBxqNbJODlW0SKOISS~eU1iTJxWgs0w-SGAP3RNB0fRp5gtG4BVOJqkTvP~o36v8JtXt9ksc5TPI5Q__"
              alt="Logo"
              height="60"
              className="me-3"
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "36px",
                letterSpacing: "5px",
                color: "#f8c22e",
              }}
            >
              Ficatio
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/" className="fs-5 text-light mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="/home" className="fs-5 text-light mx-3">
                Parts
              </Nav.Link>
              <Nav.Link href="#about" className="fs-5 text-light mx-3">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="fs-5 text-light mx-3">
                Contact
              </Nav.Link>

              {logined ? (
                <Button
                  variant="danger"
                  className="ms-3 px-4"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="warning"
                  className="ms-3 px-4"
                  onClick={() => setShow(true)}
                >
                  Login
                </Button>
              )}

              <FaUser size={24} className="ms-3 text-light" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
