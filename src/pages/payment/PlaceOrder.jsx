import React from "react";
import { Table } from "react-bootstrap";
import { MdOutlineRateReview } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Review from "../review/Review";

const PlaceOrder = ({ item }) => {
  const { products } = item;
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
        {products.map((item, i) => (
          <tr key={item._id}>
            <td style={{ maxWidth: "50px" }}>
              <img
                src={item.productImages[0]}
                alt={item.name}
                height={50}
                width={50}
                className="rounded d-block"
              />
            </td>
            <td style={{ width: "600px" }}>
              <b>{item.name}</b>
            </td>
            <td style={{ width: "100px" }}>$ {item.price}</td>

            <td className="">
              <Review productId={item._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlaceOrder;
