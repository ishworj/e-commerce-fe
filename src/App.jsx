import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { getAllCategoriesAction } from "./features/category/CategoryActions.js";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchCartAction } from "./features/cart/cartAction.js";
import { autoLogin } from "./features/user/userAction.js";
import { getOrderAction } from "./features/orders/orderActions.js";
import { getWishlistAction } from "./features/wishlist/wishlistAction.js";
import { getPubReviewAction } from "./features/reviews/reviewAction.js";
import { getPublicProductAction } from "./features/products/productActions.js";

const App = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await dispatch(getAllCategoriesAction());
    await dispatch(fetchCartAction());
    await dispatch(autoLogin());
    await dispatch(getOrderAction());
    await dispatch(getWishlistAction());
    await dispatch(getPubReviewAction());
    await dispatch(getPublicProductAction());
  };
  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="text-center" style={{ minHeight: "100vh" }}>
        Loading...
      </div>
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
