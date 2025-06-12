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
        <div className="text-center my-3">
          Forget Password? <Link to="/forgetpassword">Reset Now</Link>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
