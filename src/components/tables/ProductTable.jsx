import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

export const ProductTable = ({ products }) => {
  const { Categories } = useSelector((state) => state.categoryInfo);

  const getCategoryNameById = (categoryId) => {
    const category = Categories.find((item) => item._id === categoryId);
    return category?.categoryName;
  };
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
            <td>{getCategoryNameById(product.category) || "Uncategorized"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
