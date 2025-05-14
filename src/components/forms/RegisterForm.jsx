import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/custom inputs/CustomInput";
import { signUpInputes } from "../../assets/form-data/UserSignUpInputes";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../features/user/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {};
const RegisterForm = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, password } = form;

    if (confirmPassword !== password) return alert("Password do not match");
    try {
      //SignUp api call
      dispatch(registerUserAction(form));

      //show aucess toast once signUp is complete
      toast.success("Sign Up successful");

      // redirect to loginpage with 2s delay so that user can see the toast
      setTimeout(() => navigate("/login"));
      return { status: "success", message: "Sign Up sucessful" };
    } catch (error) {

      //show error toast if somethins goes wrong
      toast.error(error.messgae || "SignUp failed. Please try again!");
      return { status: "error", message: "signUp failed" };
    }
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
