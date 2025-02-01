import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { CiFileOn } from "react-icons/ci";
import { FaUsers, FaMoneyBillTransfer } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isMenuOpen }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedMenu, setSelectedMenu] = useState({});

  const menus = [
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
      ],
    },
  ];

  const handleClick = (menuName) => {
    setSelectedMenu((prev) => {
      const updatedMenu = {};
      for (let key in prev) {
        updatedMenu[key] = false;
      }
      updatedMenu[menuName] = true;
      return updatedMenu;
    });
  };

  const isActiveMenu = (menuLinks) => {
    return menuLinks.some((link) => pathname.startsWith(link.link));
  };

  return (
    <aside
      className={`fixed h-full w-[300px] bg-white z-50 duration-300 ${
        !isMenuOpen ? "left-[-300px]" : "left-0"
      } z-50 shadow-[0px_0px_20px_rgba(1,41,112,0.1)]`}
    >
      <ul className="p-5">
        <li onClick={() => handleClick("Главная")} className="mb-1">
          <NavLink
            to="/"
            className={`flex items-center gap-x-[6px] px-[15px] py-[10px] rounded-sm duration-300 ${
              pathname === "/"
                ? "bg-[#f6f9ff] text-[#4154f1]"
                : "hover:bg-[#f6f9ff] text-[#012970]"
            }`}
          >
            <CgMenu
              size={18}
              color={pathname === "/" ? "#4154f1" : " #899bbd"}
            />
            <p className="text-[15px] font-semibold">Главная</p>
          </NavLink>
        </li>

        {menus.map((menu, index) => (
          <li key={index} className="mb-1">
            <div
              onClick={() => handleClick(menu.title)}
              className="cursor-pointer"
            >
              <div
                className={`flex items-center justify-between px-[15px] py-[10px] rounded-sm duration-300 ${
                  isActiveMenu(menu.links)
                    ? "bg-[#f6f9ff] "
                    : "hover:bg-[#f6f9ff] "
                }`}
              >
                <div className="flex items-center gap-x-[6px]">
                  {React.cloneElement(menu.icon, {
                    color: isActiveMenu(menu.links) ? "#4154f1" : "#899bbd",
                  })}
                  <p
                    className={`text-[15px] font-semibold ${
                      isActiveMenu(menu.links)
                        ? "text-[#4154f1]"
                        : "text-[#012970]"
                    }`}
                  >
                    {menu.title}
                  </p>
                </div>
                <GoChevronDown
                  size={23}
                  className={`${
                    selectedMenu[menu.title] ? "rotate-180" : ""
                  } duration-300`}
                  color={isActiveMenu(menu.links) ? "#4154f1" : "#899bbd"}
                />
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                selectedMenu[menu.title]
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul>
                {menu.links.map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={link.link}
                      className={`flex items-center gap-x-2 text-[15px] font-semibold pl-[30px] py-[10px] leading-5 duration-300 ${
                        pathname === link.link
                          ? "text-[#4154f1]"
                          : "text-[#012970] hover:text-[#4154f1]"
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
