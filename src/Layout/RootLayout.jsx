import Footer from "@/GlobalComponent/Footer/Footer";
import Header from "@/GlobalComponent/header/Header";
import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
