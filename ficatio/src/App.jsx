import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Content from "./Pages/Content";
import Home from "./Pages/Home";
import Brand_Parts from "./Pages/Brand_Parts";
import Part_details from "./Pages/Part_details";
import Payment from "./Pages/Payment";
import CartPage from "./Pages/Cartpage";
import { addUser, getUser } from "./Services/allApi";

 // Base URL for registered users

function App() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Register User
  const handleRegister = async () => {
    try {
      const res = await addUser(formData)
      if (res.status === 201) {
        alert("Registration successful! You can now log in.");
        setIsRegistered(true);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed.");
    }
  };

  // Login User
  const handleLogin = async () => {
    try {
      const res = await getUser(); // Fetch all registered users
      const users = res.data; 
  
      // Check if credentials match any registered user
      const user = users.find(user => user.username === formData.username && user.password === formData.password);
  
      if (user) {
        localStorage.setItem("id", user.id);
        setIsLogined(true);
        setShow(false);
        navigate("/Home");
      } else {
        alert("Invalid credentials! Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };
  

  return (
    <>
      <Header setShow={setShow} logined={isLogined} />
      <Routes>
        <Route path="/" element={<Content setShow={setShow} logined={isLogined} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="//Brand_Part" element={<Brand_Parts />} />
        <Route path="/part-details" element={<Part_details />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />

      {/* Modal for Login/Register */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title className="w-100 text-center">{isRegistered ? "Login" : "Register"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isRegistered ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={handleInputChange} placeholder="Enter your username" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handleInputChange} placeholder="Enter your password" required />
              </Form.Group>
              <Button variant="success" className="w-100" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={handleInputChange} placeholder="Enter your username" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={handleInputChange} placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handleInputChange} placeholder="Enter your password" required />
              </Form.Group>
              <Button variant="primary" className="w-100" onClick={handleRegister}>
                Register
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="link" className="text-primary" onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Need an account? Register here" : "Already have an account? Login here"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
