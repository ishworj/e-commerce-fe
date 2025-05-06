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
    <UserLayout pageTitle="your Dashboard">
      <h1>DASHBOARD</h1>
    </UserLayout>
  );
};

export default Dashboard;
