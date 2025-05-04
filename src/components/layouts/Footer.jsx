import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h5 className="fw-bold">Brand Name</h5>
            <p className="text-muted">
              description for shopping experience here...
            </p>
            <div className="d-flex gap-3 align-items-center">
              <a href="https://facebook.com" className="text-dark fs-5">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="text-dark fs-5">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" className="text-dark fs-5">
                <FaTiktok />
              </a>
            </div>
          </Col>

          <Col md={3}>
            <h6 className="fw-semibold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/terms" className="text-decoration-none text-dark">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/promo-terms"
                  className="text-decoration-none text-dark"
                >
                  Promotion Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-decoration-none text-dark">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-decoration-none text-dark">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-semibold mb-3">About</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/about-us" className="text-decoration-none text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-decoration-none text-dark">
                  Careers
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-semibold mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/store-locator"
                  className="text-decoration-none text-dark"
                >
                  Store Locator
                </a>
              </li>
              <li>
                <a
                  href="/gift-cards"
                  className="text-decoration-none text-dark"
                >
                  Gift Cards & Balance
                </a>
              </li>
              <li>
                <a
                  href="/click-collect"
                  className="text-decoration-none text-dark"
                >
                  Click & Collect
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col className="text-center text-muted">
            © {new Date().getFullYear()} BrandName. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
