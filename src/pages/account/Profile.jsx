import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useEffect } from "react";
import { setMenu } from "../../features/user/userSlice";
import LoginSecurityCard from "./LoginSecurityCard";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const profileInputs = [
    {
      label: "Name",
      data: user.fName + " " + user.lName,
      schemaName: "fullName",
      type: "text",
    },
    {
      label: "Email",
      data: user.email,
      schemaName: "email",
      type: "email",
    },
    {
      label: "Primary Phone Number",
      data: user.phone,
      schemaName: "phone",
      type: "number",
    },
    {
      label: "Password",
      data: "********",
      schemaName: "password",
      type: "password",
    },
  ];

  useEffect(() => {
    dispatch(setMenu("Login & Security"), []);
  });
  if (!user._id) {
    return (
      <div>
        <Container
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "85vh" }}
        >
          <h2 className="mb-4"> Welcome to Brand! </h2>
          <p className="mb-4 text-muted">
            Please login or register to continue.
          </p>

          <div className="d-flex gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </div>
        </Container>
      </div>
    );
  }
  return (
    user._id && (
      <UserLayout pageTitle="Login & Security">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div className="border col-12 col-md-10 col-lg-6 rounded pt-3 d-flex flex-column align-items-center">
            {profileInputs.map((item, index) => (
              <LoginSecurityCard item={item} key={index} />
            ))}
          </div>
        </div>
      </UserLayout>
    )
  );
};

export default Profile;
