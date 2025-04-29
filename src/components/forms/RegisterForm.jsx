import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/custom inputs/CustomInput";
import { signUpInputes } from "../../assets/form-data/UserSignUpInputes";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../features/user/userAction";

const initialState = {};
const RegisterForm = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);
  const dispatch = useDispatch();

  console.log(form.confirmPassword);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, password } = form;

    console.log(confirmPassword);

    if (confirmPassword !== password) return alert("Password do not match");

    //SignUp api call
    dispatch(registerUserAction(form));
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      {signUpInputes.map((input) => (
        <CustomInput key={input.name} {...input} onChange={handleOnChange} />
      ))}

      <div className="py-3">
        <ul className="text-danger ">
          {passwordErrors.length > 0 &&
            passwordErrors.map((msg) => <li key={msg}>{msg} </li>)}
        </ul>
      </div>
      <div className="d-grid mt-4">
        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Register
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
