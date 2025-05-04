import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartCard = ({ item }) => {
  const { name, price, quantity } = item;
  return (
    <div className="container-fluid px-3 bg-white">
      <div className="row align-items-start border rounded-3 shadow-sm py-3">
        {/* Image */}
        <div className="col-4 col-sm-3 col-md-2">
          <img
            src="/4.jpeg"
            alt="Product"
            className="img-fluid rounded"
            style={{ objectFit: "cover", height: "100px", width: "150px" }}
          />
        </div>

        {/* Product Info */}
        <div className="col-6 col-sm-7 col-md-8">
          <p
            className="mb-1 fw-semibold"
            style={{ fontSize: "clamp(1.75rem, 1.8vw, 1.25rem)" }}
          >
            {name}
          </p>
          <p
            className="mb-1 text-primary"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
          >
            Tag
          </p>
          <div className="d-flex align-items-baseline justify-content-between">
            <div>
              <span
                className="fw-bold me-1"
                style={{ fontSize: "clamp(1.75rem, 1.5vw, 1.25rem)" }}
              >
                $
              </span>
              <span style={{ fontSize: "clamp(1.75rem, 1.5vw, 1.25rem)" }}>
                {price}
              </span>
            </div>
            <span style={{ fontSize: "clamp(1.75rem, 1.5vw, 1.25rem)" }}>
              Quantity: {quantity}
            </span>
          </div>
        </div>

        {/* Delete Icon */}
        <div className="col-2 text-end">
          <RiDeleteBin5Line
            size="1.5rem"
            className="text-danger"
            style={{ cursor: "pointer" }}
            title="Remove Item"
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
