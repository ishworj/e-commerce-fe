import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { MdOutlineAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { filterFunction } from "../../utils/filterProducts.js";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteProductAction } from "../../features/products/productActions.js";

export const ProductTable = () => {
  const { products } = useSelector((state) => state.productInfo);
  const { Categories } = useSelector((state) => state.categoryInfo);
  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm({
    searchQuery: "",
    category: "all",
    others: "newest",
  });

  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);
  useEffect(() => {
    setDisplayProducts(filterFunction(form, products));
  }, [form]);

  const getCategoryNameById = (categoryId) => {
    const category = Categories.find((item) => item._id === categoryId);
    return category?.categoryName;
  };
  // search Form handling
  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProductAction(_id));
    }
  };

  return (
    <>
      {/* controls */}
      <Form>
        <Row>
          <Col md={6}>
            <Form.Control
              name="searchQuery"
              type="text"
              placeholder="Search Products ..."
              onChange={handleOnChange}
            />
          </Col>
          <Col className="d-flex justify-content-center gap-1 gap-sm-2">
            <Form.Group>
              <Form.Select
                name="category"
                value={form.category}
                onChange={handleOnChange}
              >
                <option value="all">
                  <b>All Category</b>
                </option>
                {Categories.map((cat, i) => {
                  return <option value={cat._id}>{cat.categoryName}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select
                name="others"
                value={form.others}
                onChange={handleOnChange}
              >
                <option value="newest">Newest</option>
                <option value="toHigh">Price : Low to High</option>
                <option value="toLow">Price : High to Low </option>
                <option value="toZ">Name : A to Z </option>
                <option value="toA">Name : Z to A </option>
              </Form.Select>
            </Form.Group>
            <div>
              <Link to="/admin/products/new">
                <Button variant="dark">
                  <MdOutlineAddBox /> Add New
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Form>

      <hr />
      {/* Table */}
      <Table hover responsive>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts.map((product, i) => (
            <tr key={product._id}>
              <td style={{ maxWidth: "50px" }} className="py-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  height={50}
                  width={50}
                  className="rounded d-block mx-auto"
                />
              </td>
              <td>
                <b>{product.name}</b> <br /> {product.status}
              </td>
              <td>
                {getCategoryNameById(product.category) || "Uncategorized"}
              </td>
              <td>$ {product.price}</td>
              <td>{product.stock}</td>
              <td className="text-white text-center ">
                {product?.stock === 0 ? (
                  <div className="rounded bg-danger">Out of Stock</div>
                ) : product.stock < 30 ? (
                  <div className="rounded bg-warning">Low in Stock</div>
                ) : (
                  <div className="rounded bg-dark ">In Stock</div>
                )}
              </td>
              <td>
                <DropdownButton variant="light" title="">
                  <Dropdown.Item as={Link} to={`edit/${product._id}`}>
                    <FaEdit /> Edit
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleOnDelete(product._id)}>
                    <MdDelete /> Delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
