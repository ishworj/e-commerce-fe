import React from "react";
import {
  FaHome,
  FaStore,
  FaHeart,
  FaShoppingCart,
  FaSignInAlt,
} from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";

const BottomNavBar = ({ handleCart, user }) => {
  return (
    <nav
      className="fixed-bottom d-flex justify-content-between bg-light d-md-none"
      style={{ height: "70px" }}
    >
      {/* left */}
      <div className="d-flex justify-content-around align-items-center left gap-0 ">
        <a href="/" className="text-center nav-link">
          <FaHome size={20} />
          <div>Home</div>
        </a>
        <a href="/" className="text-center nav-link">
          <FaStore size={20} />
          <div>Shop</div>
        </a>
      </div>

      {/* FAB Notch */}
      <div className="fab-container ">
        <div
          className="fab-btn"
          onClick={handleCart}
          style={{ cursor: "pointer" }}
        >
          <FaShoppingCart size={24} />
        </div>
      </div>

      <div className="d-flex justify-content-around align-items-center left ">
        <a href="/wishlist" className="text-center nav-link">
          <FaHeart size={20} />
          <div>Wishlist</div>
        </a>

        {user?._id ? (
          <a href="/user/account" className="text-center nav-link">
            <RiAccountCircleFill size={20} />
            <div>Account</div>
          </a>
        ) : (
          <a href="/login" className="text-center nav-link">
            <FaSignInAlt size={20} />
            <div>Login</div>
          </a>
        )}
      </div>
    </nav>
  );
};

export default BottomNavBar;
