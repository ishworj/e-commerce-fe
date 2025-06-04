import React, { useState } from "react";
import { Form } from "react-bootstrap";
import OTPForm from "../../components/ForgotPassword/OTPForm";
import VerifyEmail from "../../components/ForgotPassword/VerifyEmail";
import UpdatePassword from "../../components/ForgotPassword/UpdatePassword";
import useform from "../../hooks/useForm";
import Stepper, { Step } from "../../components/stepper/stepper";
// import Stepper, { Step } from "./Stepper";

const ForgetPassword = () => {
  const [isVerifyOtpUI, setIsVerifyOtpUI] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const { form, handleOnChange, setForm } = useform({
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "51vh" }}
    >
      {/* <div className="d-flex w-lg-100 w-md-75 w-sm-50 mx-2 justify-content-center align-items-center py-4 px-5"> */}
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        {/* <Form className="d-flex flex-column">
            <h1 className="text-center">{heading}</h1> */}
        <Step>
          <h2>Verify Email</h2>
          <VerifyEmail
            handleOnChange={handleOnChange}
            form={form}
            setIsVerifyOtpUI={setIsVerifyOtpUI}
          />
        </Step>
        <Step>
          <h2>Enter your OTP</h2>
          <OTPForm
            handleOnChange={handleOnChange}
            form={form}
            setForm={setForm}
            isVerifyOtpUI={isVerifyOtpUI}
            setIsPassword={setIsPassword}
          />
        </Step>
        <Step>
          <h2>Update your Password</h2>
          <UpdatePassword
            handleOnChange={handleOnChange}
            form={form}
            isPassword={isPassword}
          />
        </Step>
        <Step>
          <h2>Done!</h2>
          <p>Password Changed successfully</p>
        </Step>
        {/* <VerifyEmail
              handleOnChange={handleOnChange}
              form={form}
              setIsVerifyOtpUI={setIsVerifyOtpUI}
              setHeading={setHeading}
            />
            <OTPForm
              handleOnChange={handleOnChange}
              form={form}
              setForm={setForm}
              setHeading={setHeading}
              isVerifyOtpUI={isVerifyOtpUI}
              setIsPassword={setIsPassword}
            />
            <UpdatePassword
              handleOnChange={handleOnChange}
              form={form}
              isPassword={isPassword}
            /> */}
        {/* </Form> */}
      </Stepper>
    </div>
    // </div>
  );
};

export default ForgetPassword;
