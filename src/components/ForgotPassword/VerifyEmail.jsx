import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const VerifyEmail = ({ handleOnChange, form }) => {
  const [isEmail, setIsEmail] = useState(false);
  const handleOnEmailSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post().then(function (response) {});
    setIsEmail(true);
  };
  return (
    <div className="d-flex gap-3 mb-2">
      <Form.Control
        required
        name="email"
        value={form.email}
        type="email"
        disabled={isEmail ? true : false}
        placeholder="Enter your Email"
        onChange={handleOnChange}
        style={{ height: "2.5rem" }}
      />
      <Button
        variant="primary"
        onClick={handleOnEmailSubmit}
        disabled={isEmail ? true : false}
        style={{ height: "2.5rem", width: "135px" }}
      >
        Send OTP
      </Button>
    </div>
  );
};

export default VerifyEmail;
