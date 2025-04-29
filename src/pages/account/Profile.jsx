import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = {};
  return user._id ? (
    <div></div>
  ) : (
    <div>
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="mb-4"> Welcome to Brand! </h2>
        <p className="mb-4 text-muted">Please login or register to continue.</p>

        <div className="d-flex gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
