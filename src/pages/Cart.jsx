import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/cards/CartCard";
import { RxCross1 } from "react-icons/rx";

const Cart = ({ handleCart }) => {
  const { cart } = useSelector((state) => state.cartInfo);
  return (
    <div className="d-flex flex-column align-items-center bg-white h-100 py-3 position-relative">
      <div
        className="d-flex align-items-center justify-content-between w-100 p-2 fs-3 sticky-top bg-white"
        style={{ height: "auto", top: 0, zIndex: 9999 }}
      >
        <div>&nbsp;</div>
        MY CART
        <RxCross1 onClick={handleCart} />
      </div>
      <div className="mt-4">
        {cart.map((item, index) => (
          <CartCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
