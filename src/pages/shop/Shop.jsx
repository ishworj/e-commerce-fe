import React from "react";
import { useSelector } from "react-redux";
import { createUserHistoryAction } from "../../features/userHistory/userHistoryAction";
import ProductCard from "../../components/cards/ProductCard";

const Shop = () => {
  const { publicProducts } = useSelector((state) => state.productInfo);
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div>
      {/* controls and actions like searching, sorting and filtering */}
      <div></div>
      <div className="py-5 w-100 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 w-100">
          {publicProducts.map((item, index) => {
            return (
              <div
                className="col"
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

export default Shop;
