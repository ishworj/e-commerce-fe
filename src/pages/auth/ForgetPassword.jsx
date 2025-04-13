import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import OTPForm from "../../components/ForgotPassword/OTPForm";
import VerifyEmail from "../../components/ForgotPassword/VerifyEmail";
import UpdatePassword from "../../components/ForgotPassword/UpdatePassword";
import useform from "../../hooks/useForm";

const ForgetPassword = () => {
  const [heading, setHeading] = useState("Verify Your Email");
  const { form, handleOnChange } = useform({
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "847px" }}
    >
      <div className="d-flex w-lg-100 w-md-75 w-sm-50 mx-2 justify-content-center align-items-center py-4 px-5 border">
        <Form className="d-flex flex-column">
          <h1 className="text-center">{heading}</h1>
          <VerifyEmail handleOnChange={handleOnChange} form={form} />
          <OTPForm
            handleOnChange={handleOnChange}
            form={form}
            setHeading={setHeading}
          />
          <UpdatePassword
            handleOnChange={handleOnChange}
            form={form}
            setHeading={setHeading}
          />
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
