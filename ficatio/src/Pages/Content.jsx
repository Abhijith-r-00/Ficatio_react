import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaTruck, FaTools, FaStar, FaUsers } from "react-icons/fa";


const Content = ({setShow,logined}) => {
  const handleShow = () => setShow(true);
  return (
    <>
     
      
      {/* Hero Section */}
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center" style={{
        background: "url('https://m.media-amazon.com/images/I/61ajeQf-XiL._AC_UF894,1000_QL80_.jpg') no-repeat center center/cover",
        height: "80vh"
      }}>
        <Container>
          <h1 className="display-3 fw-bold">Find the Best Vehicle Parts Here!</h1>
          <p className="lead">High-quality auto parts at unbeatable prices. Fast delivery, best service!</p>
          <Button variant="warning" size="lg" onClick={handleShow}>Shop Now</Button>
        </Container>
      </div>

      {/* Featured Products */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {["https://thumbs.dreamstime.com/b/part-disassembled-engine-showing-piston-27541158.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VQ6MHNpcMd7Hhd36y4yjSnweUk_EJUjaFn4ekh-h9PVPYPj5qTr5RyojOwNuSxSNvmk&usqp=CAU", "https://reliable-auto.com/wp-content/uploads/2019/10/jumping-car-battery.jpg", "https://m.media-amazon.com/images/I/51uKRnbsYIL.jpg"].map((image, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={image} alt="Vehicle Part" style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Vehicle Part {index + 1}</Card.Title>
                  <Card.Text className="flex-grow-1">High quality and durable.</Card.Text>
                  <Button variant="primary" className="mt-auto">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> 
{/* 
      🚗 Engine Components - Engine blocks, pistons, camshafts
🛞 Wheels & Tires - Alloy wheels, performance tires, hubcaps
🔋 Batteries - Car batteries, charging systems
💡 Lights & Accessories - Headlights, taillights, LED strips
🚀 Performance Parts - Turbochargers, exhaust systems, air filters */}


      {/* Why Choose Us? */}
      <Container fluid className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <Row>
            <Col md={3} className="text-center">
              <FaTruck size={50} className="text-primary" />
              <h4>Fast Delivery</h4>
              <p>Get your parts quickly with our express shipping.</p>
            </Col>
            <Col md={3} className="text-center">
              <FaTools size={50} className="text-success" />
              <h4>Top Quality</h4>
              <p>We provide only the best and most durable parts.</p>
            </Col>
            <Col md={3} className="text-center">
              <FaStar size={50} className="text-warning" />
              <h4>Best Prices</h4>
              <p>Unbeatable prices with premium quality.</p>
            </Col>
            <Col md={3} className="text-center">
              <FaUsers size={50} className="text-danger" />
              <h4>24/7 Support</h4>
              <p>Our team is available round the clock to assist you.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Customer Reviews */}
      <Container className="my-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Row>
          {["John Doe", "Jane Smith", "Michael Brown"].map((name, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>
                    "Amazing service and top-notch quality! Highly recommend."
                  </Card.Text>
                  <Card.Footer className="text-muted">- {name}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      
    </>
  )
}

export default Content