import React from "react";
import ProductReviewCard from "./ProductReviewCard";

const ProductReviews = ({ selectedProduct }) => {
  console.log(selectedProduct);
  return (
    <div className="d-flex flex-column justify-content-around col-11 col-lg-8 col-md-12 mt-4">
      <h1 className="text-start w-100">Latest Reviews</h1>

      <ProductReviewCard />
    </div>
  );
};

export default ProductReviews;
