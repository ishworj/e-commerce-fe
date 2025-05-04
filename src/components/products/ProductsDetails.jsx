import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import Stars from "../rating/Stars";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCartAction } from "../../features/cart/cartAction";
import Description from "./Description";

const ProductsDetails = ({ handleFavourite, favourite, selectedProduct }) => {
  const avgRating = 3.5;
  const ttlRatings = 10;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const handleOnAdd = () => {
    setQuantity((prev) => (prev += 1));
  };
  const handleOnSubtract = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => (prev -= 1));
    }
  };
  const handleOnAddCart = (_id, quantity) => {
    console.log("Clicked");
    dispatch(createCartAction(_id, quantity));
  };

  return (
    // selectedProduct detail
    <div className="col-sm-12 col-md-8 rounded p-3" style={{ height: "auto" }}>
      <h2 className="fs-5" style={{ width: "90%" }}>
        {selectedProduct.name}
      </h2>
      <div className="fs-3 w-100 d-flex flex-column align-items-start w-100 justify-content-center py-3">
        <div className="fs-5 border text-primary">tag</div>
        <div className="d-flex justify-content-between w-100">
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
      {/* quantity */}
      <div className="d-flex align-items-center">
        <p className="px-2 my-2">Quantity:</p>
        <button
          className="border border-black px-2 py-0 fs-4"
          onClick={handleOnSubtract}
        >
          -
        </button>

        <span className="px-3" style={{ width: "10px" }}>
          {quantity}
        </span>

        <button
          className="border border-black px-2 py-0 fs-4"
          onClick={handleOnAdd}
        >
          +
        </button>
      </div>
      {/* add cart button */}
      <Button
        className="bg-black w-100 rounded my-3 py-2"
        onClick={() => handleOnAddCart(selectedProduct._id, quantity)}
      >
        Add to cart
      </Button>
      <Description />
    </div>
  );
};

export default ProductsDetails;
