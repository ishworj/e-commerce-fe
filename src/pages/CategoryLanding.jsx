import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/cards/ProductCard";
import CategoryBar from "../components/layouts/CategoryBar";
import CategoryList from "../components/layouts/CategoryList";
import { Link } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { RxReset } from "react-icons/rx";


const CategoryLanding = () => {
  const sampleProduct = {
    name: "Classic White T-Shirt",
    description:
      "A comfortable and stylish classic white t-shirt made from organic cotton.",
    price: 19.99,
    images: ["https://m.media-amazon.com/images/I/61gDg-vFhzL._AC_SL1000_.jpg"],
  };
  return (
    <Container>
      <CategoryBar />
      <CategoryList />
      <h1 className="">Electronics</h1>
      <p>Discover our wide ranfe of Electroic equipments store balala</p>
      <Row className="pt-3 bg-light">
        <Col md={4}>
          <div className=" p-2 p-sm-4 d-flex flex-column flex-md-row justify-content-around">
            <div className="pb-1">
              <h1 className="fw-sm-bold">Check this out</h1>
              <h3>Explore our new arrivals</h3>
              <Button variant="dark">Buy now</Button>
            </div>
          </div>
        </Col>
        <Col md={8} className="d-flex justify-content-md-center">
          <div>
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/483147081/photo/futuristic-circuit-board-blue-with-electrons.jpg?s=612x612&w=0&k=20&c=cOlFe3m-qcm4zTmCKxVmX4huAlW9mpwaR2oPZhZjqK0="
              alt=""
              style={{ maxHeight: "200px" }}
            />
          </div>
        </Col>
      </Row>

      <Row className="mt-4 mt-sm-5">
        <Col>
          <h5>20 results found</h5>
        </Col>
        <Col className="d-flex justify-content-end" >
          <div className="d-flex flex-column ">
            <Button variant="none">
              <CiFilter /> Filter
            </Button>
            <Button variant="none" className="border border-danger p-1" style={{fontSize:"10px"}}>
              <RxReset /> Reset Filter
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="py-3 py-sm-5">
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
      <div className="bg-light text-center p-1">
        <p>See all results </p>
      </div>
    </Container>
  );
};

export default CategoryLanding;
