import React, { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction } from "../../features/products/productActions";
import ProductsImages from "./ProductsImages";
import ProductsDetails from "./ProductsDetails";
const ProductLandingPage = () => {
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productInfo);

  const { id } = useParams();
  console.log(id, "id in Product landing page");
  const handleFavourite = () => {
    setFavourite(!favourite);
  };
  useEffect(() => {
    if (!selectedProduct._id) {
      dispatch(getSingleProductAction(id));
    }
  }, []);

  console.log(selectedProduct, 2222);
  return (
    <div className="w-100 d-flex justify-content-center my-5">
      {/* mainpage */}
      <div className="d-flex justify-content-center w-100">
        {/* image and product details */}
        <div
          className="d-flex flex-column flex-md-row justify-content-center gap-2 col-11 col-lg-8 col-md-10 position-relative "
          style={{ maxHeight: "" }}
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
      </div>
      {/* absolute share button */}
      <div className="position-absolute" style={{ top: "15vh", right: "40px" }}>
        <FiShare2 />
      </div>
    </div>
  );
};

export default ProductLandingPage;
