import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserLayout } from "../../components/layouts/UserLayout";
import Order from "./Order";
import { useEffect } from "react";
import { setMenu } from "../../features/user/userSlice";
import UserDetail from "./UserDetail";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  console.log(user);
  const { menu } = useSelector((state) => state.userInfo);
  console.log(menu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("Orders"), []);
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

  return <UserDetail />;
};

export default Profile;
