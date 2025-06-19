import React from "react";

const ProductReviewCard = ({ item }) => {
  return (
    <div className="border rounded shadow p-3 h-100">
      <div className="d-flex justify-content-between flex-wrap">
        <div className="d-flex gap-3 mb-2">
          <img
            src={item.userImage || "default.png"}
            alt="User avatar"
            style={{ height: "3rem", width: "3rem", borderRadius: "50%" }}
          />
          <div>
            <strong className="fs-5">{item.userName}</strong>
            <p className="m-0 text-secondary">{item.email}</p>
            <p className="m-0 text-secondary">{item.createdAt.split("T")[0]}</p>
          </div>
        </div>
        <div className="text-nowrap">⭐️⭐️⭐️⭐️☆</div>
      </div>

      <p className="mt-3 mb-1 fw-semibold">Comment:</p>
      <p className="border rounded p-2 bg-light">{item.comment}</p>
    </div>
  );
};

export default ProductReviewCard;
