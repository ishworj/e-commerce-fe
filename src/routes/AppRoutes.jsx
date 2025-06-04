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
import Categories from "../pages/admin/categories/Categories.jsx";
import EditCategory from "../pages/admin/categories/EditCategory.jsx";
import AddCategory from "../pages/admin/categories/AddCategory";
import PaymentResult from "../pages/payment/PaymentResult.jsx";
import Order from "../pages/order/Order.jsx";
import PaymentMethod from "../pages/order/PaymentMethod.jsx";
import AdminOrders from "../pages/order/AdminOrders.jsx";
import Logout from "../components/Logout.jsx";
import ShippingAddress from "../components/ShippingAddress.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import AddressUpdate from "../components/shippingAddress/AddressUpdate.jsx";

// import Wishlist from "../pages/WishList.jsx";

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
        <Route path="/payment-result" element={<PaymentResult />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
      {/* private routes */}
      <Route path="/user" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="account" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Order />} />
        <Route path="payment-method" element={<PaymentMethod />} />
        <Route path="logout" element={<Logout />} />
        <Route path="shippingAddress" element={<ShippingAddress />} />
        <Route path="address/:id" element={<AddressUpdate />} />
      </Route>

      <Route path="/admin" element={<DefaultLayout />}>
        <Route path="adminDashboard" element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/new" element={<AddNewProduct />} />
        <Route path="products/edit/:_id" element={<EditProduct />} />
        <Route path="categories" element={<Categories />} />
        <Route path="edit-category/:_id" element={<EditCategory />} />
        <Route path="/admin/add-category" element={<AddCategory />} />
        <Route path="orders" element={<AdminOrders />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
