import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { MenuContext } from "../Context/MenuContext";

const Layout = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  return (
    <div className="montserrat">
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <section className="flex">
        <Sidebar isMenuOpen={isMenuOpen} />
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
