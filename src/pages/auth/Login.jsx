import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";


const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card
        className="shadow rounded p-4 text-center"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Card.Title className="mb-3">Log in</Card.Title>
        <LoginForm />
        <div className="text-end my-3">
          Forget Password? <Link to="/forgetpassword">Reset Now</Link>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
