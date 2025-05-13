import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { getAllCategoriesAction } from "./features/category/CategoryActions.js";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getPublicProductAction } from "./features/products/productActions";
import { fetchCartAction } from "./features/cart/cartAction.js";
import { autoLogin } from "./features/user/userAction.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPublicProductAction());
    dispatch(getAllCategoriesAction());
    dispatch(fetchCartAction());
    dispatch(autoLogin());
  }, []);

  return (
    <div>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
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
