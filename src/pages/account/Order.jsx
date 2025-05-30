import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/user/userSlice";
import OrderCard from "../../components/cards/OrderCard";

const Order = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderInfo);
  console.log(orders, "order");
  const [filteredData, setFilteredData] = useState([]);
  const handleOnSearch = (e) => {};
  useEffect(() => {
    dispatch(setMenu("My Orders"), []);
  });
  useEffect(() => {
    setFilteredData(orders);
  }, []);
  return (
    <UserLayout pageTitle="Order History">
      <div
        className="d-flex flex-column align-items-center w-100"
        style={{ minHeight: "85vh" }}
      >
        <div className="d-flex justify-items-end gap-2">
          <div>
            <input
              type="search"
              name="search"
              id="search"
              onChange={handleOnSearch}
            />
          </div>
          <div>sort button</div>
        </div>
        <hr className="w-100" />
        {filteredData.length > 0 ? (
          <OrderCard orders={filteredData} />
        ) : (
          <p>No Orders placed yet!</p>
        )}
      </div>
    </UserLayout>
  );
};

export default Order;
