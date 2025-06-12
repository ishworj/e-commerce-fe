import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import AdminOrdersCard from "../../components/cards/AdminOrdersCard";
import { useEffect } from "react";
import { setMenu } from "../../features/user/userSlice";

const Order = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("My Orders"));
  }, []);
  return (
    <UserLayout pageTitle="Order History">
      <AdminOrdersCard />
    </UserLayout>
  );
};

export default Order;
