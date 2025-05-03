import React, { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100">
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
            <Link to="/user/cart" className="px-3 nav-link">
              CART
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
