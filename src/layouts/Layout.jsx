import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import { MenuContext } from "../Context/MenuContext";

const Layout = () => {
  const { isMenuOpen, setIsMenuOpen } = useState(false);

  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <section className="flex">
        <Sidebar isMenuOpen={isMenuOpen} />
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
