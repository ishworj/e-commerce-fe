import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSingleProductAction,
  updateProductActionIndividually,
} from "../../features/products/productActions";
import ProductsImages from "./ProductsImages";
import ProductsDetails from "./ProductsDetails";
import ProductReviews from "./ProductReviews";
import ShareProduct from "./ShareProduct";
import {
  createWishlistAction,
  deleteWishlistItemAction,
  getWishlistAction,
} from "../../features/wishlist/wishlistAction";
import { getPubReviewAction } from "../../features/reviews/reviewAction";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const calculateAvgRating = (reviews) => {
  if (!reviews.length) return 1;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return sum / reviews.length;
};

const ProductLandingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { selectedProduct } = useSelector((state) => state.productInfo);
  const { pubReviews } = useSelector((state) => state.reviewInfo);
  const { wishlist } = useSelector((state) => state.wishlistSliceInfo);

  const [loading, setLoading] = useState(true);

  const favourite = wishlist.some((item) => item.productId === id);

  const handleDeleteWishlist = (id) => {
    dispatch(deleteWishlistItemAction(id));
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);

      await Promise.all([
        dispatch(getSingleProductAction(id)),
        dispatch(getPubReviewAction()),
        dispatch(getWishlistAction()),
      ]);

      setLoading(false);
    };

    fetchAllData();
  }, [dispatch, id]);

  const itemReviews = React.useMemo(
    () => pubReviews?.docs?.filter((r) => r.productId === id) || [],
    [pubReviews, id]
  );
  const avgRating = React.useMemo(
    () => calculateAvgRating(itemReviews),
    [itemReviews]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedProduct && avgRating !== selectedProduct.ratings) {
        dispatch(updateProductActionIndividually(id, { ratings: avgRating }));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [avgRating, dispatch, id, selectedProduct]);

  const toggleWishlist = () => {
    if (!selectedProduct) return;

    if (favourite) {
      const item = wishlist.find((i) => i.productId === id);
      if (item) dispatch(deleteWishlistItemAction(item._id));
    } else {
      const obj = {
        productId: selectedProduct._id,
        name: selectedProduct.name,
        unitPrice: selectedProduct.price,
        stockStatus: selectedProduct.stock,
        image: selectedProduct.images[0],
      };
      dispatch(createWishlistAction(obj));
    }
  };

  if (loading) {
    return (
      <Backdrop
        sx={(theme) => ({ color: "white", zIndex: theme.zIndex.drawer + 1 })}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
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
            handleFavourite={toggleWishlist}
            handleDeleteWishlist={handleDeleteWishlist}
            favourite={favourite}
            avgRating={avgRating}
            selectedProduct={selectedProduct}
            wishlist={wishlist}
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
