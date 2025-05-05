import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteCartItemAction } from "../../features/cart/cartAction";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const { name, costPrice, quantity, images, _id } = item;
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  const handleDeleteItemFromCart = (_id) => {
    dispatch(deleteCartItemAction(_id));
  };
  const handleOnAdd = () => {
    setUpdateQuantity((prev) => prev + 1);
  };
  const handleOnSubtract = () => {
    if (updateQuantity > 1 && quantity > 1) {
      setUpdateQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="container-fluid px-3 bg-white">
      <div className="row align-items-start border rounded-3 shadow-sm py-3">
        {/* Image */}
        <div className="col-4 col-sm-3 col-md-2">
          <img
            src={images?.[0]}
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
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between">
            <div>
              <span
                className="fw-bold me-1"
                style={{ fontSize: "clamp(1.75rem, 1.5vw, 1.25rem)" }}
              >
                $
              </span>
              <span style={{ fontSize: "clamp(1.75rem, 1.5vw, 1.25rem)" }}>
                {costPrice}
              </span>
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                fontSize: "clamp(1.75rem, 1.5vw, 1.25rem)",
              }}
            >
              Quantity: &nbsp;
              <div className="d-flex align-items-center">
                <button
                  className="border-0 bg-transparent"
                  onClick={handleOnSubtract}
                >
                  -
                </button>
                <span className="p-2">{updateQuantity}</span>
                <button
                  className="border-0 bg-transparent"
                  onClick={handleOnAdd}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Icon */}
        <div className="col-2 text-end">
          <RiDeleteBin5Line
            size="1.5rem"
            className="text-danger"
            style={{ cursor: "pointer" }}
            title="Remove Item"
            onClick={() => handleDeleteItemFromCart(_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
