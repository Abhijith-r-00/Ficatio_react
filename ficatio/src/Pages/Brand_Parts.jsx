import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import commonApi from "../Services/commonApi";
import { getcommonParts } from "../Services/allApi";


const BrandParts = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const vehicleType = location.state?.vehicleType || "Unknown Vehicle";
  const brand = location.state?.vehicleBrand || "Unknown Brand";

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const data = await getcommonParts();
        // console.log(data.data);
       let  dataitem=data.data
        const vehicleParts = dataitem.find((item) => item.vehicleType === vehicleType);
        setCategories(vehicleParts ? vehicleParts.parts : []);
        // console.log(vehicleParts.parts);
        
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };
    fetchParts();
  }, [vehicleType]);
// console.log(categories);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">{vehicleType} - {brand} Components</h1>
      <Row>
        {categories.map((category, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <h5 className="text-center text-primary">{category.category}</h5>
                <Row className="mt-3">
                  {category.items.map((item, idx) => (
                    <Col md={6} key={idx} className="mb-2">
                      <Button 
                        variant="outline-primary" 
                        className="w-100"
                        onClick={() => navigate(`/part-details`, { state: { vehicleType, brand,item,category:category.category } })}
                          >
                        
                        {item}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandParts;
