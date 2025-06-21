import React, { useEffect } from "react";
import ProductReviewCard from "./ProductReviewCard";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPubReviewAction } from "../../features/reviews/reviewAction";
import PaginationRounded from "../pagination/PaginationRounded";

const ProductReviews = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const { pubReviews, reviewCustomerPage } = useSelector(
    (state) => state.reviewInfo
  );
  const selectedReview = pubReviews?.docs?.filter(
    (item) => item.productId === selectedProduct._id
  );
  useEffect(() => {
    const fetchReviews = async () => {
      await dispatch(getPubReviewAction());
    };
    fetchReviews();
  }, [reviewCustomerPage, selectedProduct]);
  return (
    <div className="container mt-4">
      <h1 className="text-start w-100">Latest Reviews</h1>

      {selectedReview?.length <= 0 ? (
        <div className="text-center">No Reviews yet</div>
      ) : (
        <>
          <Row className="g-4">
            {selectedReview?.map((item, index) => (
              <Col key={index} xs={12} sm={12} md={6} lg={6} xl={4}>
                <ProductReviewCard item={item} />
              </Col>
            ))}
          </Row>
          <div className="mt-2 d-flex justify-content-center w-100">
            <PaginationRounded
              totalPages={pubReviews.totalPages}
              page={reviewCustomerPage}
              mode="review"
              client="customer"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductReviews;
