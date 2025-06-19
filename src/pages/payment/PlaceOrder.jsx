import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Review from "../review/Review";

const PlaceOrder = ({ item }) => {
  const { products } = item;
  console.log(products);
  const [isReviewing, setIsReviewing] = useState(null);

  const handleToggleReview = (id) => {
    setIsReviewing((prevId) => (prevId === id ? null : id));
  };

  return (
    <Table
      hover
      responsive
      className="col-sm-10 col-12"
      style={{ minWidth: "60vw" }}
    >
      <thead className="text-start">
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="text-start">
        {products.map((product, i) => (
          <tr key={product._id}>
            <td style={{ maxWidth: "50px" }}>
              <img
                src={product.productImages[0]}
                alt={product.name}
                height={50}
                width={50}
                className="rounded d-block"
              />
            </td>
            <td style={{ width: "600px" }}>
              <b>{product.name}</b>
            </td>
            <td style={{ width: "100px" }}>$ {product.price}</td>

            <td className="">
              <Review
                productId={product._id}
                isReviewing={isReviewing}
                handleToggleReview={handleToggleReview}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlaceOrder;
