import React, { useContext, useState } from "react";
import { FaInbox } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { MdAccountBalance, MdHome } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";
import { FiAlertCircle } from "react-icons/fi";

const Sidebar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const location = useLocation();
  const pathname = location.pathname;

  const menus = [
    {
      title: "Панель",
      title_link: "/home",
      icon: <MdHome size={16} />,
    },
    {
      title: "Апеляции",
      title_link: "/refills",
      icon: <MdAccountBalance size={16} />,
    },
    {
      title: "Выводы",
      title_link: "/withdraws/list",
      icon: <HiOutlineBanknotes size={16} />,
    },
    {
      title: "Заявки",
      title_link: "/payments/",
      icon: <FaInbox size={16} />,
    },
    localStorage.getItem("role") !== "merchant" && {
      title: "Ошибки с платежами",
      title_link: "/payments/payment-errors",
      icon: <FiAlertCircle size={16} />,
    },
  ];

  return (
    <aside>
      <div className="lg:w-[290px]"></div>
      <div
        className={`py-[26px] fixed top-0 left-0 z-[90] px-[24px] scroller overflow-y-scroll h-[100vh] bg-[#1C2434] shadow-2xs transition-all duration-300 ${
          isMenuOpen ? "left-0" : "max-lg:-left-[290px]"
        } w-[290px]`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl comfortaa">
            <span className="text-4xl">4</span>Pay{" "}
            <sup className="text-[14px]">&copy;</sup>
          </h2>
          <GoArrowLeft
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size={25}
            color="#fff"
            className="lg:hidden cursor-pointer"
          />
        </div>

        <div className="mt-10">
          <h4 className="text-[#8A99AF] font-semibold mb-4">MENU</h4>
          <ul>
            {menus.map((menu, index) => (
              <li key={index} className="mb-2">
                <NavLink
                  to={menu.title_link}
                  className={`flex items-center justify-between hover:bg-[#333A48] text-[#dee4ee] py-3 px-4 cursor-pointer rounded-sm duration-300 ${
                    pathname === menu.title_link ? "bg-[#333A48]" : ""
                  }`}
                >
                  <div className="flex items-center gap-x-1">
                    {menu.icon}
                    <p className="font-medium">{menu.title}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
