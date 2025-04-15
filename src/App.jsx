import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllCategoriesAction } from "./features/category/CategoryActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCategoriesAction())
  },[])
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
