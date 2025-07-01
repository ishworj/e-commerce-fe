import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserLayout } from "../../components/layouts/UserLayout";
import { setMenu } from "../../features/user/userSlice.js";
import SmartDashboard from "./SmartDashboard.jsx";
import BreadCrumbsAdmin from "../../components/breadCrumbs/BreadCrumbsAdmin.jsx";
import { fetchUserAction } from "../../features/user/userAction.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await dispatch(fetchUserAction());
    setLoading(false);
  };

  useEffect(() => {
    dispatch(setMenu("Dashboard"), []);
    fetchData();
  });
  if (loading) {
    return (
      <div className="text-center" style={{ minHeight: "100vh" }}>
        Loading...
      </div>
    );
  }
  return (
    <UserLayout pageTitle="Smart Dashboard">
      <BreadCrumbsAdmin />
      <SmartDashboard />
    </UserLayout>
  );
};

export default Dashboard;
