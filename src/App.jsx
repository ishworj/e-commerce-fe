import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { getAllCategoriesAction } from "./features/category/CategoryActions.js";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchCartAction } from "./features/cart/cartAction.js";
import { autoLogin, fetchUserAction } from "./features/user/userAction.js";
import { getOrderAction } from "./features/orders/orderActions.js";
import { getWishlistAction } from "./features/wishlist/wishlistAction.js";
import {
  getAllPubReviewAction,
  getPubReviewAction,
} from "./features/reviews/reviewAction.js";
import { getPublicProductAction } from "./features/products/productActions.js";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCritical = async () => {
      await Promise.all([
        dispatch(getAllCategoriesAction()),
        dispatch(getPublicProductAction()),
        dispatch(getAllPubReviewAction()),
        dispatch(autoLogin()),
      ]);
      setLoading(false);

      // Lazy load the rest
      dispatch(fetchCartAction());
      dispatch(getOrderAction());
      dispatch(getWishlistAction());
      dispatch(getPubReviewAction());
      dispatch(fetchUserAction());
    };

    fetchCritical();
  }, []);

  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <div>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
