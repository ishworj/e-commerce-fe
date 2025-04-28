import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";
import CustomInputForm from "../../components/forms/customInputForm";

const Login = () => {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome back to chunab</Card.Title>
          <hr />
          <Form>
            <CustomInputForm
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              //   onChange={handleOnChange}
            />

            <CustomInputForm
              label="Password"
              name="password"
              type="password"
              required
              placeholder="********"
              //   onChange={handleOnChange}
            />
            <div className="d-grid">
              <Button type="submit" variant="primary">
                {" "}
                Log In
              </Button>
            </div>

            <div className="text-end my-3">
              Forget Password?
              <a href="/forgetpassword">Reset now?</a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
