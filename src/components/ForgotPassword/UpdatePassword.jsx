import React from "react";
import { Button, Form } from "react-bootstrap";

const UpdatePassword = () => {
  const handleOnUpdatePw = (e) => {
    e.preventDefault;
    setIsEmail(true);
  };
  return (
    <div className="d-flex flex-column gap-3 mb-2">
      <div className="d-flex gap-1">
        <Form.Control
          required
          name="password"
          type="password"
          placeholder="Password"
          style={{ height: "2.5rem" }}
        />
        <Form.Control
          required
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          style={{ height: "2.5rem" }}
        />
      </div>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          onClick={handleOnUpdatePw}
          style={{ height: "2.5rem" }}
        >
          Update Password
        </Button>
      </div>
    </div>
  );
};

export default UpdatePassword;
