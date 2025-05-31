import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/user/userSlice";
import { getAdminOrderAction } from "../../features/orders/orderActions";
import AdminOrdersCard from "../../components/cards/AdminOrdersCard";

const AdminOrders = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(setMenu("Orders List"), []);
  });
  useEffect(() => {
    const response = dispatch(getAdminOrderAction());
    setIsLoading(!response);
  }, [dispatch]);

  const { orders } = useSelector((state) => state.orderInfo);
  console.log(orders, "orders for the admin ");
  return (
    <UserLayout pageTitle="Orders List">
      <AdminOrdersCard orders={orders} />
    </UserLayout>
  );
};

export default AdminOrders;
