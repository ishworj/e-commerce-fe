import React from "react";
import Table from "react-bootstrap/Table";

export const ProductTable = ({ products }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, i) => (
          <tr key={product._id}>
            <td>{i + 1}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.status}</td>
            <td>{product.stock}</td>
            <td>{product.category?.name || "Uncategorized"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
