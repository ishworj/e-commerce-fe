import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartAction } from "../features/cart/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartAction());
  }, []);
  return <div>Cart</div>;
};

export default Cart;
