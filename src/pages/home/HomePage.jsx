import React, { useEffect, useState } from "react";
import CategoryList from "../../components/layouts/CategoryList";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";
import { useDispatch, useSelector } from "react-redux";
import PaginationRounded from "../../components/pagination/PaginationRounded";
import { getPublicProductAction } from "../../features/products/productActions";
import { handleOnClickProduct } from "../../utils/productFunctions";
import { RotatingLines } from "react-loader-spinner";

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
      setLoading(false);
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
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "30vh" }}
          >
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default HomePage;
