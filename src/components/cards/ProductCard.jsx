import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSingleProductAction } from "../../features/products/productActions";
import Stars from "../rating/Stars";
import { BiSolidCartAdd } from "react-icons/bi";
import { createCartAction } from "../../features/cart/cartAction";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { _id, name, description, price, images } = item;
  console.log(item);

  const handleOnProductClick = (_id) => {
    dispatch(getSingleProductAction(_id));
  };

  const handleAddToCart = (_id) => {
    console.log("clcicked");
    const quantity = 1;
    dispatch(createCartAction(_id, quantity));
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
        <b style={{ fontSize: "11px", height: "10px" }}>
          {name.slice(0, 50)}
          {name.length > 50 ? "..." : ""}
        </b>
        <div className="text-end my-1">
          <button
            className="fs-3 btn"
            title="Add to Cart"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddToCart(_id);
            }}
          >
            <BiSolidCartAdd />
          </button>
        </div>
        <div
          className="d-flex justify-content-between align-items-center py-2"
          style={{ height: "20px" }}
        >
          $ {price}
          <Stars />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
