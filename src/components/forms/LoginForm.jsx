import React, { useEffect } from "react";
import { UserLoginInputes } from "../../assets/form-data/UserAuthInput";
import useForm from "../../hooks/useForm";
import CustomInput from "../custom inputs/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAction } from "../../features/user/userAction";

const LoginForm = () => {
  const { form, handleOnChange } = useForm({ email: "", password: "" });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  //to handle return location

  const { user } = useSelector((state) => state.userInfo);

  // set sendTo location depending upon user url.
  const sendTo = location?.state?.from?.location?.pathname || "/";

  useEffect(() => {
    //navigate to location ehrn the user travelled from
    user?.id && navigate(sendTo);
  }, [user?.id, navigate, sendTo]);

  const handleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();
    // call loginAction
    dispatch(loginAction(form, navigate));
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
