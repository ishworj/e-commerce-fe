import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/category/categorySlice";
import { Link } from "react-router-dom";
const shopCategories = [
  "All",
  "Clothing",
  "Electronics",
  "Footwear",
  "Jewelry",
  "Health",
  "Office ",
  "Automotive",
  "Pet ",
  "Furniture",
];

const CategoryList = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categoryInfo);
  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };
  return (
    <Row className="d-flex justify-content-center bg-light  ">
      <Col
        className="d-flex gap-3 fw-bold justify-content-sm-start justify-content-md-center "
        style={{
          whiteSpace: "nowrap",
          overflowX: "auto",
        }}
      >
        {shopCategories.map((category) => {
          return (
            <Link
              to="categorylanding"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="text-center category-item pt-3">
                <img
                  src="https://www.suzuki.com.au/wp-content/uploads/2023/07/Frame-7-808x455.webp"
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <p className="mt-1 ">{category}</p>
              </div>
            </Link>
          );
        })}
      </Col>
    </Row>
  );
};

export default CategoryList;
