import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/user/userSlice";
import { UserLayout } from "../../components/layouts/UserLayout";
import AdminOrdersCard from "../../components/cards/AdminOrdersCard";

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
