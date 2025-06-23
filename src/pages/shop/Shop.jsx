import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserHistoryAction } from "../../features/userHistory/userHistoryAction";
import ProductCard from "../../components/cards/ProductCard";
import PaginationRounded from "../../components/pagination/PaginationRounded";
import { getPublicProductAction } from "../../features/products/productActions";

const Shop = () => {
  const { publicProducts, productCustomerPage } = useSelector(
    (state) => state.productInfo
  );

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    const fetchPubProducts = async () => {
      await dispatch(getPublicProductAction());
    };
    fetchPubProducts();
  }, [productCustomerPage]);
  return (
    <div>
      {/* controls and actions like searching, sorting and filtering */}
      <div></div>
      <div className="py-5 w-100 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 w-100">
          {publicProducts?.docs?.map((item, index) => {
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

export default Shop;
