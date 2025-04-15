import React, { useEffect } from "react";
import { FiShare2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction } from "../../features/products/productActions";
const ProductLandingPage = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productInfo);
  console.log(selectedProduct);
  const { id } = useParams();
  useEffect(() => {
    if (!selectedProduct._id) {
      dispatch(getSingleProductAction(id));
    }
  }, [id, dispatch, selectedProduct]);
  return (
    <div className="w-100 d-flex justify-content-center my-5">
      {/* mainpage */}
      <div className="position-relative d-flex justify-content-center w-75">
        {/* image and product details */}
        <div className="d-flex justify-content-center gap-2 w-100">
          {/* image */}
          <img
            src={selectedProduct.images[0]}
            alt={selectedProduct.name}
            className="w-50 h-75 rounded"
          />
          {/* product detail */}
          <div className="w-50 h-75 rounded">
            <h2>{selectedProduct.name}</h2>
            <strong className="position-relative fs-1">
              <strong className="position-absolute">$</strong>
              {selectedProduct.price}
            </strong>
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
