import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryList from "../../components/layouts/CategoryList";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { publicProducts } = useSelector((state) => state.productInfo);
  return (
    <div className="px-2">
      <div style={{ height: "40vh", background: "white" }}>
        <CarouselHomePage />
      </div>
      <h3>Categories</h3>
      <CategoryList />
      <div className="py-5 w-100 border d-flex justify-content-sm-between justify-content-center">
        <div className="row ">
          {publicProducts.map((item, index) => {
            return (
              <a
                className="text-decoration-none col-12 col-md-3 col-lg-2 mt-2"
                href={`/${item._id}`}
                key={index}
              >
                <ProductCard item={item} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
