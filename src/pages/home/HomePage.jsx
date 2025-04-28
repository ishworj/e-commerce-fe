import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryList from "../../components/layouts/CategoryList";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { publicProducts } = useSelector((state) => state.productInfo);
  return (
    <Container>
      <div style={{ height: "40vh", background: "white" }}>
        <CarouselHomePage />
      </div>
      <h3>Categories</h3>
      <CategoryList />
      <Row className="py-5">
        <Col className="d-flex flex-wrap flex-row justify-content-start gap-md-4">
          {publicProducts.map((item, index) => {
            return (
              <Link
                className="text-decoration-none"
                to={`/${item._id}`}
                key={index}
              >
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
