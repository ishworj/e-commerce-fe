import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/custom inputs/CustomInput";
import { signUpInputes } from "../../assets/form-data/UserSignUpInputes";
import useForm from "../../hooks/useForm";

const initialState = {};
const RegisterForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      {signUpInputes.map((input) => (
        <CustomInput key={input.name} {...input} onChange={handleOnChange} />
      ))}
      <div className="d-grid mt-4">
        <Button variant="primary" type="submit">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
