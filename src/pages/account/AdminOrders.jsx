import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { setMenu } from "../../features/user/userSlice";
import AdminOrdersCard from "../../components/cards/AdminOrdersCard";
import { useDispatch } from "react-redux";

const AdminOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("Orders List"), []);
  });

  return (
    <UserLayout pageTitle="Orders List">
      <AdminOrdersCard />
    </UserLayout>
  );
};

export default AdminOrders;
