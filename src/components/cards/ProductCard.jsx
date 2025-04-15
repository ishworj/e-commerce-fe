import React from "react";
import { Card, Col } from "react-bootstrap";

const ProductCard = ({ item }) => {
  const { name, description, price, images } = item;
  return (
    <Card
      style={{ width: "14em", height: "22em" }}
      className="shadow-lg mb-2 mb-md-0 pt-2"
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
