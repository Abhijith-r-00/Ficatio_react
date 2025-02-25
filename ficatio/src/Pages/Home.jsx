import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const vehicleData = [
  {
    type: "Cars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRb4ehOliXYLmFZUiSoly5NF1JZF-Zf5fL2Q&s",
    brands: [
      "Toyota",
      "Honda",
      "Ford",
      "BMW",
      "Mercedes-Benz",
      "Audi",
      "Tesla",
      "Nissan",
      "Hyundai",
    ],
  },
  {
    type: "Bikes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ortrcpx1mI5d6b16NlEDulmqPQw-gc1FQQ&s",
    brands: [
      "Yamaha",
      "Ducati",
      "Harley-Davidson",
      "Kawasaki",
      "Suzuki",
      "KTM",
      "Triumph",
      "Honda",
    ],
  },
  {
    type: "Trucks",
    image:
      "https://5.imimg.com/data5/QT/QF/MY-3530642/tata-truck-metal-body-parts-500x500.jpg",
    brands: [
      "Volvo",
      "Mack",
      "Mercedes-Benz",
      "Ford",
      "Isuzu",
      "Scania",
      "Freightliner",
      "MAN",
    ],
  },
  {
    type: "Buses",
    image:
      "https://s.alicdn.com/@sc04/kf/H354c815bda8048a2adcba9a371d80e2ez.jpg",
    brands: [
      "Tata",
      "Mercedes-Benz",
      "Volvo",
      "Ashok Leyland",
      "Scania",
      "MAN",
      "Eicher",
      "Isuzu",
    ],
  },
  {
    type: "SUVs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9KtP0emOG3dQ1GqILw4_AukW007ExaCxPB26Axc--ah-6a1IwKTyLO8FH9gp69Dn2U4&usqp=CAU",
    brands: [
      "Jeep",
      "Toyota",
      "Ford",
      "Land Rover",
      "Nissan",
      "Hyundai",
      "Kia",
      "Chevrolet",
    ],
  },
  {
    type: "Electric Vehicles",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIVRHW5HkBT2YTF4KR735F-AqLx0e6hZojg&s",
    brands: [
      "Tesla",
      "Lucid",
      "Rivian",
      "Nio",
      "BYD",
      "Porsche Taycan",
      "BMW iX",
      "Mercedes EQS",
    ],
  },
  {
    type: "Vans",
    image:
      "https://image.made-in-china.com/202f0j00EePWSYdFAhGv/Genuine-Auto-Spare-Parts-for-Saic-Maxus-Ldv-Van-Pick-up-V80-V90-T60-T70-G10-G50-Diesel-and-Gasoline-Version-2-8t-2-5t-2-4L-2-0t.webp",
    brands: [
      "Ford Transit",
      "Mercedes Sprinter",
      "Volkswagen Transporter",
      "Nissan NV",
      "Toyota HiAce",
    ],
  },

  {
    type: "Sports Cars",
    image:
      "https://www.designboom.com/wp-content/uploads/2013/11/fabian-oefner-explodes-views-of-classic-sports-cars-designboom-12.jpg",
    brands: [
      "Ferrari",
      "Lamborghini",
      "Porsche",
      "McLaren",
      "Bugatti",
      "Aston Martin",
      "Koenigsegg",
    ],
  },
];

const Home = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const navigate = useNavigate();

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <Container className="mt-5 ">
      <h1 className="text-center mb-4">Explore Vehicle Categories</h1>
      <Row>
        {vehicleData.map((vehicle, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card
              style={{
                borderEndStartRadius: "50px",
                transition: "transform 0.3s ease-in-out", // Added correct transition property
              }}
              className="shadow-lg bg-warning"
              onClick={() => handleVehicleClick(vehicle)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              } // Slightly enlarges the card
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              } // Returns to normal size
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
                            // navigate(`/brands/${brand.toLowerCase()}`)
                            navigate(`/BrandPart`)
                            
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

      {/* {selectedVehicle && (
        <div className="mt-4 p-3 border rounded bg-light">
          <h2 className="text-center">{selectedVehicle.type} Brands</h2>
          <Row className="justify-content-center">
            {selectedVehicle.brands.map((brand, index) => (
              <Col md={3} key={index} className="mb-3">
                <Button variant="primary" className="w-100" onClick={() => navigate(`/brands/${brand.toLowerCase()}`)}>
                  {brand}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      )} */}
    </Container>
  );
};

export default Home;
