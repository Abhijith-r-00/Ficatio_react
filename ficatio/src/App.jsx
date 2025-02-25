import { useState } from "react";
// import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Content from "./Pages/Content";
import { Route, Routes } from "react-router-dom";
import { Form } from "react-bootstrap";
import Home from "./Pages/Home";
import Brand_Parts from "./Pages/Brand_Parts";
function App() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const[isLogined,setIsLogined]=useState(false)
  // localStorage.setItem('id',"10")
  const handleClose = () => setShow(false);
  localStorage.removeItem("id");
  const userId = localStorage.getItem("id");
  const [isRegistered, setIsRegistered] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );
    if (user) {
      alert("Login Successful!");
      setIsLogined(true);
      handleClose();
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.username === formData.username);

    if (existingUser) {
      alert("Username already taken!");
    } else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration Successful! Please login.");
      setIsRegistered(true);
    }
  };

  return (
    <>
      <Header setShow={setShow} logined={isLogined} />
      <Routes>
        <Route path="/" element={<Content setShow={setShow} logined={isLogined} />}></Route>
        <Route path="/Home" element={< Home/>}></Route>
        <Route path="/BrandPart" element={< Brand_Parts />}></Route>
      </Routes>
      <Footer />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title className="w-100 text-center">
            {isRegistered ? "Login" : "Register"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isRegistered ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
              <Button variant="success" className="w-100" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                className="w-100"
                onClick={handleRegister}
              >
                Register
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="link"
            className="text-primary"
            onClick={() => setIsRegistered(!isRegistered)}
          >
            {isRegistered
              ? "Need an account? Register here"
              : "Already have an account? Login here"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
