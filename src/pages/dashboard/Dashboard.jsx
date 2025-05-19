import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserLayout } from "../../components/layouts/UserLayout";
import {setMenu} from "../../features/user/userSlice.js"
import SmartDashboard from "./SmartDashboard.jsx";

const Dashboard = () => {
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(setMenu("Dashboard"), []);
});
  return (
    <UserLayout pageTitle="Smart Dashboard">
      <SmartDashboard />
    </UserLayout>
  );
};

export default Dashboard;
