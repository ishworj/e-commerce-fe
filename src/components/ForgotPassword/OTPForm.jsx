import React, { useState } from "react";
import { Button } from "react-bootstrap";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";

const OTPForm = ({ handleOnChange, form }) => {
  const [isOTP, setIsOTP] = useState(false);
  const handleOnOTPSubmit = (e) => {
    e.preventDefault();
    setIsOTP(true);
  };
  return (
    <div className="d-flex flex-column">
      <div className="d-flex  gap-3 mb-2">
        <OTPInput
          value={form.otp}
          name="otp"
          onChange={handleOnChange}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => (
            <input {...props} disabled={isOTP ? true : false} />
          )}
          inputStyle={{
            width: "2.5rem",
            height: "2.5rem",
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #ced4da",
          }}
          focusStyle={{
            border: "2px solid #007bff",
            outline: "none",
          }}
        />
        <Button
          variant="primary"
          disabled={isOTP ? true : false}
          onClick={handleOnOTPSubmit}
          style={{ height: "2.5rem", width: "110px" }}
        >
          Verify OTP
        </Button>
      </div>
      <p className="px-2">
        Didn't get OTP? <Link to="">Resend</Link>
      </p>
    </div>
  );
};

export default OTPForm;
