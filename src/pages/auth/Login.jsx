import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "90vh" }}
    >
      <Card
        className="shadow rounded p-4 text-center"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Card.Title className="mb-3">Welcome Back!</Card.Title>
        <LoginForm />
        <div className="text-center mt-3">
          Forget Password? <Link to="/forgetpassword">Reset Now</Link>
        </div>
        <p className="m-0">
          New with us? <Link to="/register">Register</Link>
        </p>
      </Card>
    </Container>
  );
};

export default Login;
