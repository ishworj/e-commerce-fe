import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      {/* header */}

      <Header />

      <main className="">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
