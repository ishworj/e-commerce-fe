import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryList from "../../components/layouts/CategoryList";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";

const HomePage = () => {
  const sampleProduct = {
    name: "Classic White T-Shirt",
    description:
      "A comfortable and stylish classic white t-shirt made from organic cotton.",
    price: 19.99,
    images: ["https://m.media-amazon.com/images/I/61gDg-vFhzL._AC_SL1000_.jpg"],
  };
  return (
    <Container>
      <div style={{ height: "30vh", background: "white" }}>
        <CarouselHomePage />
      </div>
      <h3>Categories</h3>
      <CategoryList />
      <Row className="py-5">
        <Col className="d-flex flex-wrap flex-row justify-content-around gap-md-4">
          {new Array(20).fill(sampleProduct).map((item) => {
            return (
              <Link className="text-decoration-none" to={"/phone/"}>
                <ProductCard item={item} />
              </Link>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
