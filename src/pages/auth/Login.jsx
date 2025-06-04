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
        <Card.Title className="mb-3 fs-2">Welcome Back!</Card.Title>
        <LoginForm />
        <div className="text-center my-3 d-flex flex-column ">
          <p className="m-0">
            Forget Password? <Link to="/forgetpassword">Reset Now</Link>
          </p>
          <p className="m-0">
            Don't have an account? <Link to="/register">Signup</Link>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
