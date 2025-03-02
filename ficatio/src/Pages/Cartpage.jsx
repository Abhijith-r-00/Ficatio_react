import React, { useState } from "react";
import { Container, Table, Button, Image, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const CartPage = () => {
  const navigate = useNavigate();

  // Sample cart items (Replace with data from backend or context)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Brake Pads",
      price: 1200,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Air Filter",
      price: 500,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  // Function to update quantity
  const updateQuantity = (id, qty) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCartItems(updatedCart);
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        <FaShoppingCart className="me-2" /> Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <h4 className="text-center text-muted">Your cart is empty! 🛒</h4>
      ) : (
        <Row>
          <Col md={8}>
            <Table bordered hover responsive className="shadow-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Image src={item.image} alt={item.name} width={50} height={50} rounded />
                    </td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="form-select"
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>₹{item.price * item.quantity}</td>
                    <td>
                      <Button variant="danger" onClick={() => removeItem(item.id)}>
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          {/* Order Summary Section */}
          <Col md={4}>
            <Card className="shadow-lg p-3">
              <h4 className="text-center">Order Summary</h4>
              <hr />
              <p>
                Subtotal: <strong>₹{totalPrice}</strong>
              </p>
              <p>Shipping: <strong>FREE</strong></p>
              <h5>
                Total: <strong className="text-success">₹{totalPrice}</strong>
              </h5>
              <Button 
                variant="success" 
                className="w-100 mt-3" 
                onClick={() => navigate("/payment")}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
