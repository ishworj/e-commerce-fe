import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const VerifyUser = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const sessionId = query.get("sessionId");
  const token = query.get("t");
  const handleOnActivation = async () => {
    const response = await axios.get(
      `http://localhost:9002/verify-user?sessionId=${sessionId}&t=${token}`
    );
    console.log(response);
  };
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ height: "840px" }}
    >
      <h1>Activate Account</h1>
      <Button onClick={handleOnActivation}>Verify Now</Button>
    </div>
  );
};

export default VerifyUser;
