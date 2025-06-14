import React, { useState } from "react";
import { useSelector } from "react-redux";
import Stars from "../../components/rating/Stars";

const ReviewRow = () => {
  const { allReviews } = useSelector((state) => state.reviewInfo);
  return allReviews.map((review, index) => {
    return (
      <tr key={review._id} style={{ width: "100%" }}>
        <td className="col-1">
          <img
            src={review.productImage}
            alt="Image"
            className="border"
            style={{ maxHeight: "2.5rem", maxWidth: "2.5rem" }}
          />
        </td>
        <td className="col-4">Product Name</td>
        <td className="col-1">
          <Stars avgRating={review.rating} />
        </td>
        <td className="col-3">{review.comment}</td>
        <td className="col-3">
          <div
            className="d-flex gap-2 align-items-center"
            style={{ maxWidth: "300px", minWidth: "0" }}
          >
            <img
              src={review.userImage || "/default.png"}
              alt="Image"
              style={{ maxHeight: "2.5rem", maxWidth: "2.5rem" }}
            />
            <div
              style={{
                minWidth: 0,
                overflowWrap: "break-word",
              }}
            >
              <strong>{review.userName}</strong>
              <br />
              {review.email}
            </div>
          </div>
        </td>
      </tr>
    );
  });
};

export default ReviewRow;
