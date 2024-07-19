import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ childern }) => {
  return (
    <>
      <Navbar />
      <main>{childern}</main>
      <Footer />
    </>
  );
};

export default Layout;
