import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/category/categorySlice.js";
import { RxHamburgerMenu } from "react-icons/rx";
import AllCategoriesModal from "./AllCategoriesModal.jsx";

const shopCategories = [
  "All",
  "Clothing",
  "Electronics",
  "Footwear",
  "Jewelry",
  "Health",
  "Office",
  "Automotive",
  "Pet",
  "Furniture",
  "sdfg",
];

const showCategories = () => {
  alert("hello");
};

const CategoryBar = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categoryInfo);
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);

  return (
    <Row className="d-flex justify-content-center  align-items-top  bg-light py-2  d-md-none ">
      {/* Hamburger: Fixed on the left */}
      <Col
        xs="auto"
        className="d-flex align-items-center justify-content-center px-2 pb-2"
        style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          position: "sticky", 
          left: 0,
          zIndex: 2,
        }}
        onClick={() => setShowCategoriesModal(true)}
      >
        <RxHamburgerMenu />
      </Col>

      {/* Categories: Scrollable under the hamburger */}
      <Col
        className="d-flex gap-3 fw-bold  align-items-center pb-2 "
        style={{
          whiteSpace: "nowrap",
          overflowX: "auto",
        }}
      >
        {shopCategories.map((category) => (
          <div
            key={category}
            className={
              category === selectedCategory
                ? "fw-bolder category-item"
                : "category-item"
            }
            style={
              category === selectedCategory
                ? { borderBottom: "3px solid black" }
                : {}
            }
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </Col>

      <AllCategoriesModal
        show={showCategoriesModal}
        onHide={() => setShowCategoriesModal(false)}
      />
    </Row>
  );
};

export default CategoryBar;
