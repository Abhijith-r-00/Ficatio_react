import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} className="mb-3">
            <h5>Ficatio The Vehicle Parts Store</h5>
            <p>Your one-stop shop for high-quality vehicle parts at the best prices.</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#parts" className="text-light text-decoration-none">Parts</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@vehicleparts.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Location: 123 Auto Street, Car City</p>
          </Col>
        </Row>

        <hr className="bg-light" />

        {/* Social Media Links */}
        <Row className="text-center">
          <Col>
            <a href="https://facebook.com" className="text-light mx-2"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="text-light mx-2"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="text-light mx-2"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" className="text-light mx-2"><FaLinkedin size={24} /></a>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Vehicle Parts Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer