import React, { useEffect, useState } from "react";
import CategoryList from "../../components/layouts/CategoryList";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";
import { useDispatch, useSelector } from "react-redux";
import { createUserHistoryAction } from "../../features/userHistory/userHistoryAction";
import PaginationRounded from "../../components/pagination/PaginationRounded";
import {
  getPublicProductAction,
  getSingleProductAction,
} from "../../features/products/productActions";
import { getPubReviewAction } from "../../features/reviews/reviewAction";
import { handleOnClickProduct } from "../../utils/productFunctions";

const HomePage = () => {
  const dispatch = useDispatch();
  const { publicProducts, productCustomerPage } = useSelector(
    (state) => state.productInfo
  );
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    const fetchPubProducts = async () => {
      await dispatch(getPublicProductAction());
    };
    fetchPubProducts();
  }, [dispatch, productCustomerPage]);

  return (
    <div className="mx-2">
      <div style={{ height: "40vh", background: "white" }}>
        <CarouselHomePage />
      </div>
      <h3>Categories</h3>
      <CategoryList />
      <div className="py-5 w-100 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 w-100">
          {publicProducts?.docs?.map((item, index) => {
            return (
              <div
                className="col"
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => handleOnClickProduct(item, user, dispatch)}
              >
                <ProductCard item={item} />
              </div>
            );
          })}
          <div className="mt-2 d-flex justify-content-center w-100">
            <PaginationRounded
              totalPages={publicProducts?.totalPages}
              page={productCustomerPage}
              mode="product"
              client="customer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
