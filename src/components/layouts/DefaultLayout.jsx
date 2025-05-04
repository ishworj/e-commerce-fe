import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Cart from "../../pages/Cart";
import { useDispatch } from "react-redux";
import { fetchCartAction } from "../../features/cart/cartAction";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const handleCart = () => {
    setIsCart(!isCart);
    dispatch(fetchCartAction());
  };

  return (
    <div className="position-relative">
      {/* header */}

      <Header handleCart={handleCart} setNavHeight={setNavHeight} />

      <main className="position-relative">
        <Outlet />
        {isCart && (
          <div>
            <div
              className="bg-black position-absolute w-100 h-100 opacity-50"
              style={{ top: 0, right: 0, zIndex: 99 }}
            ></div>
            <div
              className="col-12 col-lg-6 col-md-8 bg-white overflow-y-scroll"
              style={{
                position: "fixed",
                top: navHeight,
                right: 0,
                zIndex: 100,
                height: "90vh",
              }}
            >
              <Cart handleCart={handleCart} />
            </div>
          </div>
        )}
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
