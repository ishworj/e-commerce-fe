import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSingleProductAction } from "../../features/products/productActions";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { name, description, price, images, _id } = item;

  const handleOnProductClick = (_id) => {
    dispatch(getSingleProductAction(_id));
    console.log(item, "item");
  };
  return (
    <Card
      style={{ width: "14em", height: "22em" }}
      className="shadow-lg mb-2 mb-md-0 pt-2"
      onClick={() => handleOnProductClick(_id)}
    >
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>$ {price}</Card.Title>
        <b>{name}</b>
        <p className="description fw-light mb-0" style={{ fontSize: "12px" }}>
          {description.split("", 50)}...
        </p>
        <h1>* * * * *</h1>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
