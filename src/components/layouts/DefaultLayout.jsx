import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Cart from "../../pages/Cart";
import { useDispatch } from "react-redux";
import { fetchCartAction } from "../../features/cart/cartAction";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const cartRef = useRef();
  const [isCart, setIsCart] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCart = () => {
    if (isCart) {
      setIsClosing(true);
      setTimeout(() => {
        setShowCart(false);
        setIsClosing(false);
      }, 200);
    } else {
      setShowCart(true);
      dispatch(fetchCartAction());
    }
    setIsCart(!isCart);
  };

  useEffect(() => {
    if (isCart && !showCart) {
      setShowCart(true);
    }
  }, [isCart]);

  useEffect(() => {
    if (!showCart) return;
    const handleClickOutsideCart = (event) => {
      if (cartRef && !cartRef.current.contains(event.target)) {
        handleCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutsideCart);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCart);
    };
  }, [showCart, handleCart]);

  return (
    <div className="position-relative">
      <Header handleCart={handleCart} setNavHeight={setNavHeight} />

      <main className="position-relative">
        <Outlet />

        {showCart && (
          <div ref={cartRef}>
            <div
              className={`col-12 col-lg-6 col-md-8 bg-white overflow-y-scroll ${
                isClosing ? "cart-animation-close" : "cart-animation-open"
              }`}
              style={{
                position: "fixed",
                top: navHeight,
                right: 0,
                zIndex: 100,
                height: "100vh",
              }}
            >
              <Cart handleCart={handleCart} />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
