import React from "react";
import ProductReviewCard from "./ProductReviewCard";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductReviews = ({ selectedProduct }) => {
  const { pubReviews } = useSelector((state) => state.reviewInfo);
  const selectedReview = pubReviews.filter(
    (item) => item.productId === selectedProduct._id
  );
  return (
    <div className="container mt-4">
      <h1 className="text-start w-100">Latest Reviews</h1>

      {selectedReview.length <= 0 ? (
        <div className="text-center">No Reviews yet</div>
      ) : (
        <Row className="g-4">
          {selectedReview.map((item, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={6} xl={4}>
              <ProductReviewCard item={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductReviews;
