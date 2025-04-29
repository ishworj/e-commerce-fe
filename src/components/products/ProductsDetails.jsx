import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import Stars from "../rating/Stars";
import { Button } from "react-bootstrap";

const ProductsDetails = ({ handleFavourite, favourite, selectedProduct }) => {
  const avgRating = 3.5;
  const ttlRatings = 10;
  return (
    // selectedProduct detail
    <div className="col-sm-12 col-md-6 rounded" style={{ height: "auto" }}>
      <h2 className="fs-5">{selectedProduct.name}</h2>
      <div className="fs-3 w-100 d-flex align-items-center w-100 justify-content-between">
        <span className="d-flex align-items-start">
          <span className="fs-5">$</span>
          <strong>{selectedProduct.price}</strong>
        </span>

        <button className="border-0 pe-4" onClick={handleFavourite}>
          {favourite ? (
            <GoHeartFill className="fs-4" />
          ) : (
            <FaRegHeart className="fs-4" />
          )}
        </button>
      </div>
      {/* latest reviews */}
      <div className="my-2 fs-1 d-flex align-items-center">
        <div className="fs-3">
          <Stars />
        </div>
        <div className="fs-3">
          <span>({avgRating}</span>
          <span>/</span>
          <span>{ttlRatings})</span>
        </div>
      </div>
      {/* add cart button */}
      <Button className="bg-black w-100 rounded my-3 py-2">Add to cart</Button>
    </div>
  );
};

export default ProductsDetails;
