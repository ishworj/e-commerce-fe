import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import OTPForm from "../../components/ForgotPassword/OTPForm";
import VerifyEmail from "../../components/ForgotPassword/VerifyEmail";
import UpdatePassword from "../../components/ForgotPassword/UpdatePassword";

const ForgetPassword = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex w-lg-100 w-md-75 w-sm-50 mx-2 justify-content-center align-items-center py-4 px-2 border">
        <Form className="d-flex flex-column">
          <h1 className="text-center">Verify Your Email</h1>
          <VerifyEmail />
          <OTPForm />
          <UpdatePassword />
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
