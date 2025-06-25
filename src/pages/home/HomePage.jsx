import React, { useEffect, useState } from "react";
import CategoryList from "../../components/layouts/CategoryList";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";
import { useDispatch, useSelector } from "react-redux";
import PaginationRounded from "../../components/pagination/PaginationRounded";
import { getPublicProductAction } from "../../features/products/productActions";
import { handleOnClickProduct } from "../../utils/productFunctions";
import HotPicks from "../../components/hotpicks/HotPicks";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const HomePage = () => {
  const dispatch = useDispatch();
  const { publicProducts, productCustomerPage } = useSelector(
    (state) => state.productInfo
  );
  const { user } = useSelector((state) => state.userInfo);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPubProducts = async () => {
      await dispatch(getPublicProductAction());
    };
    fetchPubProducts();
  }, [dispatch, productCustomerPage]);

  useEffect(() => {
    const isDataLoaded = publicProducts?.docs?.length > 0;
    if (isDataLoaded) {
      setLoading(false);
    }
  }, [publicProducts]);

  return (
    <div className="mx-2">
      <div style={{ height: "40vh", background: "white" }}>
        <CarouselHomePage />
      </div>
      <CategoryList />
      <HotPicks handleOnClickProduct={handleOnClickProduct} />
      <div className="py-5 w-100">
        {loading ? (
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <div className="d-flex flex-column align-content-start">
            <h1>Explore More</h1>
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
                {publicProducts?.totalPages > 1 && (
                  <PaginationRounded
                    totalPages={publicProducts?.totalPages}
                    page={productCustomerPage}
                    mode="product"
                    client="customer"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
