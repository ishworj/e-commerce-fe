import React, { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction } from "../../features/products/productActions";
import ProductsImages from "./ProductsImages";
import ProductsDetails from "./ProductsDetails";
import ProductReviews from "./ProductReviews";
import ShareProduct from "./ShareProduct";
const ProductLandingPage = () => {
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productInfo);

  const { id } = useParams();
  const handleFavourite = () => {
    setFavourite(!favourite);
  };
  useEffect(() => {
    if (!selectedProduct._id) {
      dispatch(getSingleProductAction(id));
    }
  }, []);
  return (
    <div className="w-100 d-flex justify-content-center py-2 position-relative">
      {/* mainpage */}
      <div className="d-flex align-items-center w-100 flex-column">
        {/* image and product details */}
        <div
          className="d-flex flex-column flex-md-row justify-content-around col-11 col-lg-8 col-md-12"
          style={{ background: "#eee" }}
        >
          {/* image */}
          <ProductsImages selectedProduct={selectedProduct} />
          {/* selectedProduct detail */}
          <ProductsDetails
            handleFavourite={handleFavourite}
            favourite={favourite}
            selectedProduct={selectedProduct}
          />
        </div>
        {/* latest reviews  */}
        <div className="d-flex align-items-center w-100 flex-column">
          <ProductReviews selectedProduct={selectedProduct} />
        </div>
      </div>

      {/* absolute share button */}
      <ShareProduct />
    </div>
  );
};

export default ProductLandingPage;
