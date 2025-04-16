import React from "react";
import {
  FaHome,
  FaStore,
  FaHeart,
  FaShoppingCart,
  FaSignInAlt,
} from "react-icons/fa";

const BottomNavBar = () => {
  return (
    <nav
      className="fixed-bottom d-flex justify-content-between  bg-light d-md-none"
      style={{ height: "70px" }}
    >
      {/* left */}
      <div className="d-flex justify-content-around align-items-center left gap-0 ">
        <div className="text-center">
          <FaHome size={20} />
          <div>Home</div>
        </div>

        <div className="text-center">
          <FaStore size={20} />
          <div>Bazar</div>
        </div>
      </div>

      {/* FAB Notch */}
      <div className="fab-container ">
        <div className="fab-btn">
          <FaShoppingCart size={24} />
        </div>
      </div>

      <div className="d-flex justify-content-around align-items-center left ">
        <div className="text-center">
          <FaHeart size={20} />
          <div>Wishlist</div>
        </div>

        <div className="text-center">
          <FaSignInAlt size={20} />
          <div>Login</div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;
