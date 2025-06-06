import React, { useEffect } from "react";
import CategoryList from "../../components/layouts/CategoryList";
import ProductCard from "../../components/cards/ProductCard";
import CarouselHomePage from "../../components/carousel/CarouselHomePage";
import { useSelector } from "react-redux";
import { createUserHistoryAction } from "../../features/userHistory/userHistoryAction";
import { style } from "framer-motion/client";

const HomePage = () => {
  const { publicProducts } = useSelector((state) => state.productInfo);
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className="mx-2">
      <div style={{ height: "40vh", background: "white" }}>
        <CarouselHomePage />
      </div>
      <h3>Categories</h3>
      <CategoryList />
      <div className="py-5 w-100 d-flex justify-content-sm-between justify-content-center">
        {/* <div className="row d-flex justify-content-center w-100"> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {publicProducts.map((item, index) => {
            return (
              <div
                className="text-decoration-none col"
                style={{ cursor: "pointer" }}
                key={index}
                onClick={async () => {
                  // e.preventDefault();
                  console.log("on the way");
                  await createUserHistoryAction({
                    userId: user._id || null,
                    productId: item._id,
                    categoryId: item.category,
                    action: "click",
                  });
                  alert("history created ");
                  window.location.href = `/${item._id}`;
                }}
              >
                <ProductCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
