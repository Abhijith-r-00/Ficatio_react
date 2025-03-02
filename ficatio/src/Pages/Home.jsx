import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getVehicles } from "../Services/allApi";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const navigate = useNavigate();

  // Fetch vehicle data from db.json
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await getVehicles();
        setVehicles(res.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchVehicles();
  }, []);

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Explore Vehicle Categories</h1>
      <Row>
        {vehicles.map((vehicle, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card
              style={{
                borderEndStartRadius: "50px",
                transition: "transform 0.3s ease-in-out",
              }}
              className="shadow-lg bg-warning"
              onClick={() => handleVehicleClick(vehicle)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Card.Img
                variant="top"
                src={vehicle.image}
                alt={vehicle.type}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>{vehicle.type}</Card.Title>
              </Card.Body>
            </Card>
            {selectedVehicle && selectedVehicle.type === vehicle.type && (
              <Col md={12} className="mt-3">
                <div className="p-4 border rounded bg-light w-100">
                  <h5 className="text-center">{selectedVehicle.type} Brands</h5>
                  <Row className="justify-content-between">
                    {selectedVehicle.brands.map((brand, idx) => (
                      <Col md={6} key={idx} className="mb-1">
                        <Button
                          variant="primary"
                          className="w-100"
                          onClick={() =>
                            navigate(`/Brand_Part`, {
                              state: { vehicleType: selectedVehicle.type,vehicleBrand:brand },
                            })
                          }
                        >
                          {brand}
                        </Button>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
