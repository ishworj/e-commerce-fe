import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomePage from "../pages/home/HomePage";
import Register from "../pages/auth/Register";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import CategoryLanding from "../pages/CategoryLanding";
import Profile from "../pages/account/Profile";
import OTPForm from "../components/ForgotPassword/OTPForm";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verify-otp" element={<OTPForm />} />
        <Route path="/categorylanding" element={<CategoryLanding />} />
        <Route path="/account" element={<Profile />} />
      </Route>
      {/* private routes */}
      <Route path="user" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
