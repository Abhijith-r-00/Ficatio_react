import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaGooglePay, FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! Redirecting...");
    navigate("/success");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-3">Secure Payment</h3>
        <p className="text-muted text-center">Choose your payment method and proceed</p>
        
        {/* Payment Method Selection */}
        <Row className="mb-3">
          <Col className="d-flex justify-content-around">
            <Button 
              variant={paymentMethod === "card" ? "primary" : "outline-secondary"} 
              onClick={() => setPaymentMethod("card")}
            >
              <FaCreditCard className="me-1" /> Card
            </Button>
            <Button 
              variant={paymentMethod === "upi" ? "primary" : "outline-secondary"} 
              onClick={() => setPaymentMethod("upi")}
            >
              <FaGooglePay className="me-1" /> UPI
            </Button>
            <Button 
              variant={paymentMethod === "wallet" ? "primary" : "outline-secondary"} 
              onClick={() => setPaymentMethod("wallet")}
            >
              <FaPaypal className="me-1" /> Wallet
            </Button>
          </Col>
        </Row>

        {/* Card Payment Form */}
        {paymentMethod === "card" && (
          <Form onSubmit={handlePayment}>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                <InputGroup.Text><FaCcVisa size={24} /></InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="password" placeholder="XXX" required />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" variant="success" className="w-100">
              Pay Now ₹999
            </Button>
          </Form>
        )}

        {/* UPI Payment Form */}
        {paymentMethod === "upi" && (
          <Form onSubmit={handlePayment}>
            <Form.Group className="mb-3">
              <Form.Label>Enter UPI ID</Form.Label>
              <Form.Control type="text" placeholder="example@upi" required />
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">
              Pay Now ₹999
            </Button>
          </Form>
        )}

        {/* Wallet Payment */}
        {paymentMethod === "wallet" && (
          <Form onSubmit={handlePayment}>
            <Form.Group className="mb-3">
              <Form.Label>Select Wallet</Form.Label>
              <Form.Select required>
                <option>PayPal</option>
                <option>Amazon Pay</option>
                <option>PhonePe</option>
                <option>Google Pay</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">
              Pay Now ₹999
            </Button>
          </Form>
        )}

        {/* Footer */}
        <p className="text-muted text-center mt-3" style={{ fontSize: "12px" }}>
          Payments secured via 256-bit SSL encryption
        </p>
      </Card>
    </Container>
  );
};

export default Payment;
