import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSingleProductAction } from "../../features/products/productActions";
import Stars from "../rating/Stars";
import { BiSolidCartAdd } from "react-icons/bi";
import { createCartAction } from "../../features/cart/cartAction";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { _id, name, description, price, images, ratings } = item;

  const [avgRating, setAvgRating] = useState(0);
  const [ttlRatings, setTtlRatings] = useState(0);

  const handleOnProductClick = (_id) => {
    dispatch(getSingleProductAction(_id));
  };

  const handleAddToCart = (_id) => {
    console.log("clcicked");
    const quantity = 1;
    dispatch(createCartAction(_id, quantity));
  };

  useEffect(() => {
    const avgRatings = async () => {
      const sum = await ratings.reduce((acc, curr) => acc + curr, 0);
      setTtlRatings(ratings.length);
      setAvgRating(sum / ratings.length);
      return sum / ratings.length;
    };
    avgRatings();
  }, []);
  return (
    <Card
      // width: "18em",
      style={{ height: "28em" }}
      className="mb-2 mb-md-0 shadow-lg border-0"
      onClick={() => handleOnProductClick(_id)}
    >
      <Card.Img
        variant="top"
        src={images[0]}
        style={{ height: "60%" }}
        loading="lazy"
      />
      <Card.Body
        className="d-flex flex-column justify-content-between"
        style={{ height: "25%" }}
      >
        <b style={{ height: "20px" }} className="fs-5">
          {name.slice(0, 45)}
          {name.length > 45 ? "..." : ""}
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
        <div className="d-flex justify-content-between align-items-center py-2 fs-4">
          $ {price}
          <Stars avgRating={avgRating} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
