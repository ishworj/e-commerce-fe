import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/user/userSlice";
import { UserLayout } from "../../components/layouts/UserLayout";
import AdminOrdersCard from "../../components/cards/AdminOrdersCard";
import PaginationRounded from "../../components/pagination/PaginationRounded";
import {
  getAdminOrderAction,
  getOrderAction,
} from "../../features/orders/orderActions";

const AdminOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("Orders List"), []);
  });
  const { orders } = useSelector((state) => state.orderInfo);
  const { user } = useSelector((state) => state.userInfo);

  const [page, setpage] = useState(1);

  useEffect(() => {
    const fetchOrders = async () => {
      user.role === "admin"
        ? await dispatch(getAdminOrderAction(page))
        : await dispatch(getOrderAction(page));
    };
    fetchOrders();
  }, [dispatch, user.role, page]);
  return (
    <UserLayout pageTitle="Orders List">
      <AdminOrdersCard orders={orders} user={user} />
      <div className="mt-2 d-flex justify-content-center w-100">
        <PaginationRounded
          totalPages={orders.totalPages}
          setpage={setpage}
          page={page}
          mode="order"
        />
      </div>
    </UserLayout>
  );
};

export default AdminOrders;
