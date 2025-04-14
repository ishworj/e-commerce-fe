import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const VerifyUser = () => {
  const [isVerified, setIsVerified] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const sessionId = query.get("sessionId");
  const token = query.get("t");
  const handleOnActivation = async () => {
    const response = await axios.get(
      `http://localhost:9002/verify-user?sessionId=${sessionId}&t=${token}`
    );
    console.log(response);
    response.status === 200 ? setIsVerified(true) : "";
    return response;
  };

  return isVerified === true ? (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ height: "840px" }}
    >
      <h1>Hi, userName!</h1>
      <p>Your Account has been activated Successfully!</p>
    </div>
  ) : isVerified === false ? (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ height: "840px" }}
    >
      Sorry, Unfortunately we could not activate your Account!
    </div>
  ) : (
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
