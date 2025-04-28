import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custom inputs/CustomInput";
import { signUpInputes } from "../../assets/form-data/UserSignUpInputes";

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Form style={{ width: "450px" }} className="card p-5 shadow-lg">
        <h1 className="text-center mb-4">Sign Up Now</h1>
        <hr />

        {/* rendering all signUp input fields */}
        {signUpInputes.map((input) => (
          <CustomInput key={input.name} {...input} />
        ))}

        <div className="d-grid mt-4">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
