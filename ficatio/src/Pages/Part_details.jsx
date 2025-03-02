import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
const Part_details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const part = location.state?.part || {}; // Get part details from navigation state

  const handleAddToCart = () => {
    // Store in localStorage or global state
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(part);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
    navigate("/cart")
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-4">
        <Card.Img
          variant="top"
          src={`https://via.placeholder.com/500?text=${part}`} // Placeholder image
          style={{ height: "300px", objectFit: "contain" }}
        />
        <Card.Body className="text-center">
          <h2>{part}</h2>
          <p className="text-muted">High-quality {part} for your vehicle.</p>
          <h4 className="text-success">$199.99</h4>
          <div className="d-flex justify-content-around mt-3">
            <Button variant="primary" onClick={handleAddToCart} >
              Add to Cart
            </Button>
            <Button variant="success" onClick={() => navigate("/payment")}>
              Pay Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Part_details
