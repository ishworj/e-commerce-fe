import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import Stars from "../rating/Stars";
import { Button } from "react-bootstrap";

const ProductsDetails = ({ handleFavourite, favourite, selectedProduct }) => {
  return (
    // selectedProduct detail
    <div className="col-sm-12 col-md-6 rounded" style={{ height: "auto" }}>
      <h2>{selectedProduct.name}</h2>
      <div className="fs-1 w-100 d-flex align-items-center w-100 justify-content-between">
        <span className="d-flex align-items-start">
          <span className="fs-5">$</span>
          <strong>{selectedProduct.price}</strong>
        </span>

        <button className="border-0 pe-4" onClick={handleFavourite}>
          {favourite ? (
            <GoHeartFill className="fs-3" />
          ) : (
            <FaRegHeart className="fs-3" />
          )}
        </button>
      </div>
      {/* latest reviews */}
      <div className="my-3">
        <Stars />
      </div>
      {/* add cart button */}
      <Button className="bg-black w-100 rounded my-3 py-2">Add to cart</Button>
    </div>
  );
};

export default ProductsDetails;
