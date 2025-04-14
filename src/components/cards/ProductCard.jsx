import React from "react";
import { Card, Col } from "react-bootstrap";

const ProductCard = ({ item }) => {
  const { name, description, price, images } = item;
  return (
    <Card style={{ width: "12rem", height: "22rem" }} className="shadow mb-2 mb-md-0">
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>$ {price}</Card.Title>
        <b>{name}</b>
        <p className="description fw-light mb-0" style={{fontSize:"12px"}}>{description}...</p>
          <h1>* * * * *</h1>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
