import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import AdminOrdersCard from "../../components/cards/AdminOrdersCard";

const Order = () => {
  return (
    <UserLayout pageTitle="Order History">
      <AdminOrdersCard />
    </UserLayout>
  );
};

export default Order;
