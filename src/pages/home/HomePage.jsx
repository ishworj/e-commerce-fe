import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryList from "../../components/layouts/CategoryList";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";
import { useSelector } from "react-redux";

const HomePage = () => {
  const sampleProduct = {
    name: "Classic White T-Shirt",
    description:
      "A comfortable and stylish classic white t-shirt made from organic cotton.",
    price: 19.99,
    images: ["https://m.media-amazon.com/images/I/61gDg-vFhzL._AC_SL1000_.jpg"],
  };

  const { publicProducts } = useSelector((state) => state.productInfo);
  console.log(publicProducts, 232);
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
                to={`/product/${item._id}`}
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
