import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UserSidebar } from "./UserSidebar.jsx";
import { AuthRoute } from "../../routes/AuthRoutes.jsx";

export const UserLayout = ({ pageTitle = "default", children }) => {
  const { user } = useSelector((state) => state.userInfo);
  console.log(user, "user from store");
  return (
    <AuthRoute>
      <div>
        <Container fluid>
          <Row>
            <Col md={3} xl={2} className="bg-dark text-light">
              <div className="p-3">
                <div>Welcome Back</div>
                <h3>{user?.fName + " " + user?.lName}</h3>
              </div>
              <hr />
              <UserSidebar />
            </Col>
            <Col>
              <div className="p-2">
                <h1>
                  <b>{pageTitle}</b>
                </h1>
              </div>
              <hr />
              <main className="main mb-3">{children}</main>
            </Col>
          </Row>
        </Container>
      </div>
    </AuthRoute>
  );
};
