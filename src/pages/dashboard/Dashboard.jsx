import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserLayout } from "../../components/layouts/UserLayout";
import {setMenu} from "../../features/user/userSlice.js"

const Dashboard = () => {
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(setMenu("Dashboard"), []);
});
  return (
    <UserLayout pageTitle="Dashboard">
      <h1>Products 200</h1>
      <h1>Orders 200</h1>
      <h2>categories 200</h2>
      <h2>Users 200</h2>
    </UserLayout>
  );
};

export default Dashboard;
