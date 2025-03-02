import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { addToCart, getItem } from "../Services/allApi";
const Part_details = () => {
  const [item, SetItem] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const part = location.state?.part || {}; // Get part details from navigation state
  const vehicleType = location.state?.vehicleType || "Unknown Vehicle";
  const brand = location.state?.brand || "Unknown Brand";
  const partItem = location.state?.item || "Unknown Item";
  const category = location.state?.category || "Unknowcategory";
 
  useEffect(() => {
    getSelectedItem();
  }, []);
  // console.log("dccwef",brand);
  // console.log(category);

  const getSelectedItem = async () => {
    try {
      const res = await getItem();
      let data = res.data;
      const itemcat = data.find((item) => item.category === category);
      //  console.log(itemcat.items);
       let itemData=itemcat.items
       const categoryItemDetails= itemData.find((item)=>item.name==partItem);
      // console.log(categoryItemDetails);
      SetItem(categoryItemDetails)
      
    
      //  console.log(itemDetails);

      //  setItem
    } catch (error) {
      console.error("Error occured");
    }
  };
  const handleAddToCart = async () => {
    const cartItem = {
      name: partItem,
      rate: item.rate,
      description: item.description,
      image: item.image,
      warranty: item.warranty,
      specifications: item.specifications,
    };
    console.log(partItem);
    
  
    try {
      const response = await addToCart(cartItem)
      // console.log(response.status);
      
      if (response.status>=200 && response.status<=300) {
        alert("Added to Cart!");
        navigate("/cart"); // Redirect to Cart Page
      } else {
        alert("Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  
  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-4 border-0">
        <Row>
          {/* Left Side - Image */}
          <Col md={5} className="text-center">
            <Card.Img
              variant="top"
              src={item.image || "https://via.placeholder.com/500?text=No+Image"}
              style={{
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Col>

          {/* Right Side - Details */}
          <Col md={7}>
            <Card.Body>
              <h2 className="fw-bold">{partItem}</h2>
              <p className="text-muted">{item.description}</p>

              {/* Specifications */}
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item>
                  <strong>Material:</strong> {item.specifications?.material || "N/A"}
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <strong>Cylinders:</strong> {item.specifications?.cylinders || "N/A"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Weight:</strong> {item.specifications?.weight || "N/A"}
                </ListGroup.Item> */}
              </ListGroup>

              {/* Pricing & Warranty */}
              <h4 className="text-success fw-bold">{item.rate} ₹</h4>
              <p className="text-info">
                <strong>Warranty:</strong> {item.warranty || "No warranty available"}
              </p>

              {/* Action Buttons */}
              <div className="d-flex justify-content-around mt-3">
                <Button variant="primary" size="lg" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button variant="success" size="lg" onClick={() => navigate("/payment")}>
                  Pay Now
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Part_details;
