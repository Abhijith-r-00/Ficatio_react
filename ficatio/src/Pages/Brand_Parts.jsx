import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const vehicleParts = [
    { 
      category: "Engine Components",
      items: ["Engine Block", "Cylinder Head", "Pistons", "Crankshaft", "Camshaft", "Timing Belt/Chain", "Fuel Injectors", "Turbocharger (if applicable)"]
    },
    { 
      category: "Transmission & Drivetrain",
      items: ["Transmission (Manual/Automatic)", "Clutch", "Driveshaft", "Differential", "Axles", "CV Joints"]
    },
    { 
      category: "Suspension & Steering",
      items: ["Shock Absorbers", "Struts", "Coil Springs", "Control Arms", "Steering Rack", "Tie Rods", "Power Steering Pump"]
    },
    { 
      category: "Braking System",
      items: ["Brake Pads", "Brake Rotors/Discs", "Brake Calipers", "Brake Lines", "Master Cylinder", "ABS System"]
    },
    { 
      category: "Electrical & Electronics",
      items: ["Battery", "Alternator", "Starter Motor", "Spark Plugs & Ignition System", "Sensors (Oxygen Sensor, MAF Sensor, etc.)", "ECU (Engine Control Unit)", "Wiring Harness"]
    },
    { 
      category: "Cooling & Heating System",
      items: ["Radiator", "Water Pump", "Thermostat", "Heater Core", "Cooling Fans"]
    },
    { 
      category: "Exhaust System",
      items: ["Exhaust Manifold", "Catalytic Converter", "Muffler", "Oxygen Sensors"]
    },
    { 
      category: "Body & Exterior",
      items: ["Bumpers", "Doors & Panels", "Hood & Trunk", "Fenders", "Windshield & Windows", "Mirrors"]
    },
    { 
      category: "Interior & Cabin Components",
      items: ["Seats", "Dashboard", "Steering Wheel", "Center Console", "Airbags", "Infotainment System"]
    },
    { 
      category: "Lighting & Visibility",
      items: ["Headlights", "Taillights", "Fog Lights", "Turn Signals", "Windshield Wipers"]
    },
    { 
      category: "Fuel System",
      items: ["Fuel Tank", "Fuel Pump", "Fuel Injectors", "Fuel Filter"]
    },
    { 
      category: "Tires & Wheels",
      items: ["Tires", "Rims/Wheels", "Lug Nuts", "Wheel Bearings"]
    }
  ];

const Brand_Parts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Vehicle Parts & Components</h1>
      <Row>
        {vehicleParts.map((part, index) => (
          <Col md={4} key={index} className="mb-3">
            {/* Main Category Card */}
            <Card 
              className="shadow-lg" 
              onClick={() => handleCategoryClick(part.category)}
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <Card.Body className="text-center">
                <Card.Title>{part.category}</Card.Title>
              </Card.Body>
            </Card>

            {/* Sub-items as Buttons inside a collapsible Card */}
            {selectedCategory === part.category && (
              <Card className="mt-2 shadow-sm border-primary">
                <Card.Body>
                  <h6 className="text-center text-primary mb-3">{part.category} Parts</h6>
                  <Row>
                    {part.items.map((item, idx) => (
                      <Col md={6} key={idx} className="mb-2">
                        <Button variant="outline-primary" className="w-100">
                          {item}
                        </Button>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Brand_Parts;
