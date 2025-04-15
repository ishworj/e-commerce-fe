import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/category/categorySlice";
import { Link } from "react-router-dom";

const CategoryList = ({ isModalView = false }) => {
  const dispatch = useDispatch();
  const { Categories, selectedCategory } = useSelector(
    (state) => state.categoryInfo
  );
  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <Row
      className={`justify-content-center bg-light ${isModalView ? "p-3" : ""}`}
    >
      <Col
        className={`fw-bold ${
          isModalView
            ? "d-flex flex-wrap justify-content-center gap-4"
            : "d-flex gap-3 justify-content-sm-start justify-content-md-center"
        }`}
        style={
          isModalView
            ? {}
            : {
                whiteSpace: "nowrap",
                overflowX: "auto",
              }
        }
      >
        {Categories.map((category, index) => (
          <Link
            to={`/categorylanding/${category.categoryName}`}
            key={index}
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            <div className="text-center category-item pt-3">
              <img
                src="https://www.suzuki.com.au/wp-content/uploads/2023/07/Frame-7-808x455.webp"
                alt={category.categoryName}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <p className="mt-1">{category.categoryName}</p>
            </div>
          </Link>
        ))}
      </Col>
    </Row>
  );
};

export default CategoryList;
