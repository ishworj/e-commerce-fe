import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
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
