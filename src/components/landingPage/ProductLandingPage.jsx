import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductLandingPage = () => {
  const { publicProducts } = useSelector((state) => state.productInfo);
  console.log(publicProducts);
  const { id } = useParams();
  const selectedProduct = publicProducts.find((item) => id == item._id);
  console.log(selectedProduct);
  return (
    <div>
      {/* mainpage */}
      <div>
        {/* image and product details */}
        <div className="d-flex">
          {/* image */}
          <div>
            <img src={selectedProduct.images[0]} alt={selectedProduct.name} />
          </div>
          {/* product detail */}
          <div></div>
        </div>
        {/* latest reviews */}
        <div></div>
      </div>
      {/* absolute share button */}
      <div></div>
    </div>
  );
};

export default ProductLandingPage;
