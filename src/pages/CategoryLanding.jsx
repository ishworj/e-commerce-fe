import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/cards/ProductCard";
import CategoryBar from "../components/layouts/CategoryBar";
import CategoryList from "../components/layouts/CategoryList";
import { useParams } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
import BottomNavBar from "../components/layouts/BottomNavBar";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../features/category/categorySlice";
import { getAllCategoriesAction } from "../features/category/CategoryActions";
import { getPublicProductAction } from "../features/products/productActions";
import { Link } from "react-router-dom";

const CategoryLanding = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { publicProducts } = useSelector((state) => state.productInfo);
  const { selectedCategory, Categories } = useSelector(
    (state) => state.categoryInfo
  );
  useEffect(() => {
    // Load categories if empty
    if (Categories.length === 0) {
      dispatch(getAllCategoriesAction());
    }

    // Load public products if empty
    if (publicProducts.length === 0) {
      dispatch(getPublicProductAction());
    }
    console.log("publicProducts", publicProducts);
    console.log("SelectedCategory before setting:", selectedCategory);

    // Set selected category when categories are available
    if (!selectedCategory.categoryName && Categories.length > 0) {
      const category = Categories.find(
        (cat) => cat.categoryName.toLowercase === categoryName.toLowerCase()
      );
      if (category) {
        dispatch(setSelectedCategory(category));
      }
    }
  }, [
    dispatch,
    Categories,
    categoryName,
    selectedCategory.categoryName,
    publicProducts.length,
  ]);

  const productsByCategory = publicProducts.filter((product) => {
    console.log(
      "product.category:",
      product.category,
      "| selectedCategory._id:",
      selectedCategory._id
    );
    return product.category == selectedCategory._id;
  });

  return (
    <Container>
      <CategoryBar />
      <CategoryList />
      <Row className="pt-3 bg-light">
        <Col md={4}>
          <div className=" p-2 p-sm-4 d-flex flex-column flex-md-row justify-content-around">
            <div className="pb-1">
              <h1 className="fw-sm-bold">Check this out</h1>
              <h3>Explore our new {selectedCategory.categoryName} arrivals</h3>
              <Button variant="dark">Buy now</Button>
            </div>
          </div>
        </Col>
        <Col md={8} className="d-flex justify-content-md-center">
          <div>
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/483147081/photo/futuristic-circuit-board-blue-with-electrons.jpg?s=612x612&w=0&k=20&c=cOlFe3m-qcm4zTmCKxVmX4huAlW9mpwaR2oPZhZjqK0="
              alt=""
              style={{ maxHeight: "200px" }}
            />
          </div>
        </Col>
      </Row>

      <Row className="mt-4 mt-sm-5">
        <Col>
          <h5>{productsByCategory.length} results found</h5>
        </Col>
        <Col className="d-flex justify-content-end">
          <div className="d-flex flex-column ">
            <Button variant="none">
              <CiFilter /> Filter
            </Button>
            <Button
              variant="none"
              className="border border-danger p-1"
              style={{ fontSize: "10px" }}
            >
              <RxReset /> Reset Filter
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="py-5">
        <Col className="d-flex flex-wrap flex-row justify-content-start gap-md-4">
          {productsByCategory.length > 0 ? (
            productsByCategory.map((item, index) => (
              <Link
                className="text-decoration-none"
                to={`/${item._id}`}
                key={index}
              >
                <ProductCard item={item} />
              </Link>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </Col>
      </Row>
      <div className="bg-light text-center p-1">
        <p>See all results </p>
      </div>
    </Container>
  );
};

export default CategoryLanding;
