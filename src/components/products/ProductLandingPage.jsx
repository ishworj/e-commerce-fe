import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction } from "../../features/products/productActions";
import ProductsImages from "./ProductsImages";
import ProductsDetails from "./ProductsDetails";
import ProductReviews from "./ProductReviews";
import ShareProduct from "./ShareProduct";
import {
  createWishlistAction,
  deleteWishlistItemAction,
} from "../../features/wishlist/wishlistAction";
const ProductLandingPage = () => {
  const [favourite, setFavourite] = useState(false);
  const [avgRating, setAvgRating] = useState(0);
  const [ttlRatings, setTtlRatings] = useState(0);
  const { selectedProduct } = useSelector((state) => state.productInfo);

  const dispatch = useDispatch();

  const { id } = useParams();

  console.log(selectedProduct, "selectedProduct");

  const handleFavourite = () => {
    const obj = {
      productId: selectedProduct._id,
      name: selectedProduct.name,
      unitPrice: selectedProduct.price,
      stockStatus: selectedProduct.stock,
      image: selectedProduct.images[0],
    };
    setFavourite(!favourite);
    dispatch(createWishlistAction(obj));
  };

  const handleDeleteWishlist = () => {
    setFavourite(!favourite);
    dispatch(deleteWishlistItemAction(selectedProduct._id));
  };

  useEffect(() => {
    console.log("i am here fidrs");
    const fetchSingleProduct = async () => {
      await dispatch(getSingleProductAction(id));
    };
    fetchSingleProduct();
  }, [dispatch, id]);

  useEffect(() => {
    console.log("I was here");
    if (!selectedProduct || !selectedProduct.ratings) return;
    const avgRatings = async () => {
      const sum = await selectedProduct?.ratings.reduce(
        (acc, curr) => acc + curr,
        0
      );
      setTtlRatings(selectedProduct?.ratings.length);
      setAvgRating(sum / selectedProduct?.ratings.length);
      return sum / selectedProduct?.ratings.length;
    };
    avgRatings();
  }, [selectedProduct]);

  if (selectedProduct == null) {
    return <div>Loading.....</div>;
  }

  return (
    <div
      className="w-100 d-flex justify-content-center py-2 position-relative"
      style={{ minHeight: "75dvh" }}
    >
      {/* mainpage */}
      <div className="d-flex align-items-center w-100 flex-column">
        {/* image and product details */}
        <div
          className="d-flex flex-column flex-md-row justify-content-around container col-11 col-lg-8 col-md-12"
          style={{ background: "#eee" }}
        >
          {/* image */}
          <ProductsImages selectedProduct={selectedProduct} />
          {/* selectedProduct detail */}
          <ProductsDetails
            handleFavourite={handleFavourite}
            handleDeleteWishlist={handleDeleteWishlist}
            favourite={favourite}
            selectedProduct={selectedProduct}
            avgRating={avgRating}
            ttlRatings={ttlRatings}
          />
        </div>
        {/* latest reviews  */}
        <div className="d-flex flex-column flex-md-row justify-content-around col-11 col-lg-8 col-md-12">
          <ProductReviews selectedProduct={selectedProduct} />
        </div>
      </div>

      {/* absolute share button */}
      <ShareProduct />
    </div>
  );
};

export default ProductLandingPage;
