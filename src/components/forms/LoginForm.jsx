import React from "react";
import { UserLoginInputes } from "../../assets/form-data/UserAuthInput";
import useForm from "../../hooks/useForm";
import CustomInput from "../custom inputs/CustomInput";
import { Button, Form } from "react-bootstrap";

const LoginForm = () => {
  const { form, handleOnChange } = useForm({ email: "", password: "" });

  const handleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {UserLoginInputes.map((item) => {
          return (
            <CustomInput key={item.name} {...item} onChange={handleOnChange} />
          );
        })}
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};
export default LoginForm;
