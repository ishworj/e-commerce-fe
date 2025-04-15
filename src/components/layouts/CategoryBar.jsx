import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/category/categorySlice.js";
import { RxHamburgerMenu } from "react-icons/rx";
import AllCategoriesModal from "./AllCategoriesModal.jsx";
import { Link } from "react-router-dom";


const CategoryBar = () => {
  const dispatch = useDispatch();
  const { selectedCategory , Categories } = useSelector((state) => state.categoryInfo);
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);

   const handleCategoryClick = (categoryName) => {
      dispatch(setSelectedCategory(categoryName));
    };

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
        {Categories.map((category, index) => (
          <Link
            to={`/categorylanding/${category.categoryName}`}
            key={index}
            className={
              category.categoryName === selectedCategory
                ? "fw-bolder category-item text-decoration-none text-dark"
                : "category-item text-decoration-none text-dark"
            }
            style={
              category.categoryName === selectedCategory
                ? { borderBottom: "3px solid black" }
                : {}
            }
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            {category.categoryName}
          </Link>
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
