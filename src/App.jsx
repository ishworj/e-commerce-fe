import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { getAllCategoriesAction } from "./features/category/CategoryActions.js";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getPublicProductAction } from "./features/products/productActions";
import { fetchCartAction } from "./features/cart/cartAction.js";
import { autoLogin } from "./features/user/userAction.js";
import { getOrderAction } from "./features/orders/orderActions.js";
import { ThreeCircles } from "react-loader-spinner";
import { finsishAppLoading } from "./features/loading/LoadingSlice.js";
import { getOrCreateSession } from "./utils/sessionHistory.js";

const App = () => {
  const dispatch = useDispatch();
  const { appLoading } = useSelector((state) => state.loading);
  useEffect(() => {
    const login = async () => {
      await dispatch(autoLogin());
    };
    getOrCreateSession();
    dispatch(getPublicProductAction());
    dispatch(getAllCategoriesAction());
    dispatch(fetchCartAction());
    dispatch(getOrderAction());
    const initialiseApp = () => {
      dispatch(finsishAppLoading());
    };
    setTimeout(() => {
      initialiseApp();
    }, 800);
    login();
  }, []);
  if (appLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100dvh" }}
      >
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
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
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
