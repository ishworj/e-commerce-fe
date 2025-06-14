import React from "react";
import ReviewRow from "./ReviewRow";

const ReviewsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Product</th>
          <th scope="col">Rating</th>
          <th scope="col">Comment</th>
          <th scope="col">User</th>
        </tr>
      </thead>
      <tbody>
        <ReviewRow />
      </tbody>
    </table>
  );
};

export default ReviewsTable;
