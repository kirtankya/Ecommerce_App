import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/common/header";
import Footer from "../shared/common/footer";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
