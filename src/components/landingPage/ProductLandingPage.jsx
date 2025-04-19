import React, { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction } from "../../features/products/productActions";
import { FaRegHeart } from "react-icons/fa";
const ProductLandingPage = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productInfo);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (!selectedProduct._id) {
      dispatch(getSingleProductAction(id));
    }
  }, []);

  console.log(selectedProduct, 2222);
  return (
    <div className="w-100 d-flex justify-content-center my-5">
      {/* mainpage */}
      <div className="position-relative d-flex justify-content-center w-75">
        {/* image and product details */}
        <div className="d-flex justify-content-center gap-2 w-100">
          {/* image */}
          <img
            src={selectedProduct.images?.[0]} // this was the reason of having error
            alt={selectedProduct.name}
            className="w-50 h-75 rounded"
          />
          {/* selectedProduct detail */}
          <div className="w-50 h-75 rounded">
            <h2>{selectedProduct.name}</h2>
            <div className="fs-1 w-100 d-flex align-items-center w-100 justify-content-between">
              <span className="d-flex align-items-start">
                <span className="fs-5">$</span>
                <strong>{selectedProduct.price}</strong>
              </span>

              <FaRegHeart className="fs-4" />
            </div>
          </div>
        </div>
        {/* latest reviews */}
        <div></div>
      </div>
      {/* absolute share button */}
      <div className="position-absolute" style={{ top: "15vh", right: "40px" }}>
        <FiShare2 />
      </div>
    </div>
  );
};

export default ProductLandingPage;
