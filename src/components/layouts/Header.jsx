import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ handleCart, setNavHeight }) => {
  const navRef = useRef(0);
  useEffect(() => {
    const updateHeight = () => {
      setNavHeight(navRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary w-100 sticky-top"
      ref={navRef}
    >
      <Container>
        {/* Left-aligned links (Shop, About) - Hidden on mobile */}
        <Navbar.Collapse id="navbar-left" className="order-1 order-lg-0">
          <Nav>
            <Link to="/shop" className="px-3 nav-link">
              SHOP
            </Link>
            <Link to="/about" className="px-3 nav-link">
              ABOUT
            </Link>
            <Link to="/wishlist" className="px-3 nav-link">
              WISHLIST
            </Link>
          </Nav>
        </Navbar.Collapse>

        {/* Brand (Centered) */}
        <Navbar.Brand as={Link} to={"/"} className=" fs-1 fw-bold order-0">
          BRAND
        </Navbar.Brand>

        {/* Toggle button (for mobile) */}
        <Navbar.Toggle
          aria-controls="navbar-left navbar-right"
          className="order-0 ms-auto"
        />

        {/* Right-aligned links (Wishlist, Search, Cart) - Hidden on mobile */}
        <Navbar.Collapse id="navbar-right" className="order-3 order-lg-0">
          <Nav className="ms-auto">
            <Link to="/search" className="px-3 nav-link">
              SEARCH
            </Link>

            <Link to="/user/account" className="px-3 nav-link">
              ACCOUNT
            </Link>
            {/*  changed to button as we are expecting the div for cart to be rendered above the current page, as we are not navigating to another separate page acc to the figma design */}
            <button className="px-3 text-start nav-link" onClick={handleCart}>
              CART
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
