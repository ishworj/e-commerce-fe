import React, { useEffect } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomePage from "../pages/home/HomePage";
import Register from "../pages/auth/Register";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";
import CategoryLanding from "../pages/CategoryLanding";
import Profile from "../pages/account/Profile";
import VerifyUser from "../pages/auth/VerifyUser";
import { getPublicProductAction } from "../features/products/productActions";
import { useDispatch } from "react-redux";
import ProductLandingPage from "../components/products/ProductLandingPage";
import Cart from "../pages/Cart";
import ProductList from "../pages/product/ProductList.jsx";
import AddNewProduct from "../pages/product/AddNewProduct.jsx";
import EditProduct from "../pages/product/EditProduct.jsx";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPublicProductAction());
  }, []);
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/category/:categoryName" element={<CategoryLanding />} />
        <Route path="/verify-user" element={<VerifyUser />} />
        <Route path="/:id" element={<ProductLandingPage />} />
      </Route>
      {/* private routes */}
      <Route path="/user" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="account" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="adminDashboard" element={<Dashboard />} />
      </Route>

      <Route path="/admin" element={<DefaultLayout />}>
        <Route path="products" element={<ProductList />} />
        <Route path="products/new" element={<AddNewProduct />} />
        <Route path="products/edit/:_id" element={<EditProduct />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
