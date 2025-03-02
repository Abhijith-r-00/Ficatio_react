import React, { useEffect, useState } from "react";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import { deleteCartItem, getAllAdded } from "../Services/allApi";
import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  // Fetch cart items from db.json
  useEffect(() => {
   getAllAddedItems();
  }, []);
const getAllAddedItems=async()=>{
  try {
    const res=await getAllAdded();
    setCartItems(res.data)
console.log(res);

  } catch (error) {
    console.error();
    
  }
}
  // Remove item from cart
  const handleRemoveFromCart = async (id) => {
    try {
      deleteCartItem(id);
      getAllAddedItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
console.log(cartItems,"hgwghd");

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <Card className="mb-3 shadow-lg" key={item.id} >
            <Card.Body className="d-flex align-items-center">
              <Card.Img
                src={item.image}
                style={{ width: "150px", height: "150px", objectFit: "cover", marginRight: "20px" }}
              />
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <h5 className="text-success">{item.rate} ₹</h5>
                <ListGroup variant="flush">
                  {Object.entries(item.specifications || {}).slice(0, 3).map(([key, value]) => (
                    <ListGroup.Item key={key}>
                      <strong>{key}:</strong> {value}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div>
                <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>
                  🗑 Remove
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}

      {/* {cartItems.length > 0 && (
        <div className="text-center mt-4">
          <Button variant="success" size="lg">
            💳 Pay Now
          </Button>
        </div>
      )} */}
    </Container>
  );
};

export default CartPage;
