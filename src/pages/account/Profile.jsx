import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = {};
  return user._id ? (
    <div></div>
  ) : (
    <div>
      <Button variant="primary" onClick={() => navigate("/login")}>
        Sign in
      </Button>
    </div>
  );
};

export default Profile;
