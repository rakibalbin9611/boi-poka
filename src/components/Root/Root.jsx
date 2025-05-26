import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className=" work-sans">
      <section className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
