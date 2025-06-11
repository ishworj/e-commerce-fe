import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { getAllCategoriesAction } from "./features/category/CategoryActions.js";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getPublicProductAction } from "./features/products/productActions";
import { fetchCartAction } from "./features/cart/cartAction.js";
import { autoLogin } from "./features/user/userAction.js";
import { getOrderAction } from "./features/orders/orderActions.js";
import { getWishlistAction } from "./features/wishlist/wishlistAction.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPublicProductAction());
    dispatch(getAllCategoriesAction());
    dispatch(fetchCartAction());
    dispatch(autoLogin());
    dispatch(getOrderAction());
    dispatch(getWishlistAction());
  }, []);

  return (
    <div>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={1000}
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
