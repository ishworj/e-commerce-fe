import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/category/categorySlice.js";

const shopCategories = [
  "Clothing",
  "Electronics",
  "Footwear",
  "Jewelry",
  "Health",
  "Office ",
  "Automotive",
  "Pet ",
  "Furniture",
  "sdfg",
];

const CategoryBar = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categoryInfo);
  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <Row className="d-flex justify-content-center bg-light p-2">
      <Col
        className="d-flex gap-3 fw-bold justify-content-sm-start justify-content-md-center"
        style={{
          whiteSpace: "nowrap",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {shopCategories.map((category) => {
          return (
            <div
              className={
                category === selectedCategory
                  ? "text-decoration-underline fw-bolder category-item"
                  : "category-item"
              }
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default CategoryBar;
