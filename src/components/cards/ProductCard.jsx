import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSingleProductAction } from "../../features/products/productActions";
import Stars from "../rating/Stars";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { name, description, price, images, _id } = item;

  const handleOnProductClick = (_id) => {
    dispatch(getSingleProductAction(_id));
  };
  return (
    <Card
      // width: "18em",
      style={{ height: "22em" }}
      className="mb-2 mb-md-0 shadow-lg border-0"
      onClick={() => handleOnProductClick(_id)}
    >
      <Card.Img variant="top" src={images[0]} style={{ height: "65%" }} />
      <Card.Body
        className="d-flex flex-column justify-content-between"
        style={{ height: "25%" }}
      >
        <b style={{ fontSize: "11px" }}>
          {name.slice(0, 50)}
          {name.length > 50 ? "..." : ""}
        </b>
        <div
          className="d-flex justify-content-between"
          style={{ height: "20px" }}
        >
          <Card.Title style={{ fontSize: "15px" }}>$ {price}</Card.Title>
          <div style={{ fontSize: "10px" }}>
            <Stars />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
