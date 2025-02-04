import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { CiFileOn } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";
import { FaUsers, FaMoneyBillTransfer } from "react-icons/fa6";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isMenuOpen }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const menus = [
    {
      title: "Баланс",
      icon: <FaWallet size={16} />,
      links: [
        { title: "Пополнения", link: "/refills" },
        { title: "Пополнение в USDT", link: "/refills/create" },
        { title: "Скачать отчет", link: "/refills/download/" },
        { title: "Кошельки", link: "/refills/wallets/" },
      ],
    },
    {
      title: "Выводы",
      icon: <FaMoneyBillTransfer size={18} />,
      links: [
        { title: "Создать заявку", link: "/withdraws/create" },
        { title: "Просмотр", link: "/withdraws/list" },
        { title: "Отчёт", link: "/withdraws/download" },
      ],
    },
    {
      title: "Проекты",
      icon: <CiFileOn strokeWidth="1" size={18} />,
      links: [
        { title: "Создать", link: "/projects/create" },
        { title: "Просмотр", link: "/projects/" },
      ],
    },
    {
      title: "Заявки",
      icon: <FaUsers size={18} />,
      links: [
        { title: "Просмотр", link: "/payments/" },
        { title: "Отчет", link: "/payments/download/" },
        { title: "Обращения", link: "/appeals/" },
        { title: "Создать Заявку", link: "/payments/create/" },
        { title: "Ошибки с платежами", link: "/payments/payment-errors" },
      ],
    },
  ];

  const isActiveMenu = (menuLinks) => {
    return menuLinks.some((link) => pathname.startsWith(link.link));
  };

  return (
    <aside
      className={`fixed h-full w-[300px] scroll-white overflow-y-scroll pb-16 max-h-[100vh] bg-white z-50 duration-300 ${
        !isMenuOpen ? "left-[-300px]" : "left-0"
      } z-50 shadow-[0px_0px_20px_rgba(1,41,112,0.1)]`}
    >
      <ul className="p-5">
        <li className="mb-1">
          <NavLink
            to="/"
            className={`flex items-center gap-x-[6px] px-[15px] py-[10px] rounded-sm duration-300 ${
              pathname === "/"
                ? "bg-[#dee8fc] text-[#252d78]"
                : " text-[#bfd0dd]"
            }`}
          >
            <CgMenu
              size={18}
              color={pathname === "/" ? "#252d78" : " #899bbd"}
            />
            <p className="text-[14px] font-semibold">Главная</p>
          </NavLink>
        </li>

        {menus.map((menu, index) => (
          <li key={index} className="mb-1">
            <div className="cursor-pointer">
              <div
                className={`flex items-center justify-between px-[15px] py-[10px] rounded-sm duration-300 ${
                  isActiveMenu(menu.links) ? "bg-[#dee8fc] " : " "
                }`}
              >
                <div className="flex items-center gap-x-[6px]">
                  {React.cloneElement(menu.icon, {
                    color: isActiveMenu(menu.links) ? "#252d78" : "#899bbd",
                  })}
                  <p
                    className={`text-[14px] font-semibold ${
                      isActiveMenu(menu.links)
                        ? "text-[#252d78]"
                        : "text-[#bfd0dd]"
                    }`}
                  >
                    {menu.title}
                  </p>
                </div>
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 `}>
              <ul>
                {menu.links.map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={link.link}
                      className={`flex items-center gap-x-2 text-[14px] font-semibold pl-[30px] py-[10px] leading-5 duration-300 ${
                        pathname === link.link
                          ? "text-[#252d78]"
                          : "text-[#bfd0dd] hover:text-[#252d78]"
                      }`}
                    >
                      <HiMiniArrowSmallRight size={13} />
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
