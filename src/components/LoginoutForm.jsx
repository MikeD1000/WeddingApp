import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from "../utilities";

const Loginout = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    console.log(token)
    if (token){
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        setIsLoggedIn(!!token)}
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoggedIn) {
        // Logout logic
        await api.post("users/logout/", {
          headers: { Authorization: `Token ${token}` }
        });
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setToken("");
      } else {
        // Login logic
        console.log(emailInput, passwordInput)
        const response = await api.post("users/login/", { email: emailInput, password: passwordInput });
        if (response.status === 200) {
          const { token } = response.data;
          localStorage.setItem("token", token);
          api.defaults.headers.common["Authorization"] = `Token ${token}`
          setToken(token);
          setIsLoggedIn(true);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          onChange={(e) => setEmailInput(e.target.value)}
          type="email" 
          placeholder="Enter email" 
          disabled={isLoggedIn}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          onChange={(e) => setPasswordInput(e.target.value)}
          type="password" 
          placeholder="Password" 
          disabled={isLoggedIn}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    </Form>
  );
}

export default Loginout;