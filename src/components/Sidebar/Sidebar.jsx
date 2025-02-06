import React from "react";
import { FaInbox } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { IoExitOutline } from "react-icons/io5";
import { MdAccountBalance, MdHome } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ isMenuOpen }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const menus = [
   
    {
      title: "Пополнения",
      title_link: "/refills",
      icon: <MdAccountBalance size={13} />,
      links: [
        { title: "Пополнение в USDT", link: "/refills/create" },
        // { title: "Скачать отчет", link: "/refills/download/" },
        { title: "Кошельки", link: "/refills/wallets/" },
      ],
    },
    {
      title: "Выводы",
      title_link: "/withdraws/list",
      icon: <HiOutlineBanknotes size={16} />,
      links: [
        { title: "Создать заявку", link: "/withdraws/create" },
        // { title: "Отчёт", link: "/withdraws/download" },
      ],
    },
    {
      title: "Заявки",
      title_link: "/payments/",
      icon: <FaInbox size={16} />,
      links: [
        { title: "Просмотр", link: "/payments/" },
        // { title: "Отчет", link: "/payments/download/" },
        { title: "Обращения", link: "/appeals/" },
        { title: "Создать Заявку", link: "/payments/create/" },
        { title: "Ошибки с платежами", link: "/payments/payment-errors" },
      ],
    },
  ];

  const isActiveMenu = (menuLinks) => {
    return menuLinks.some((link) => pathname === link.link);
  };
  return (
    <>
      <div
        className={`${!isMenuOpen && "min-lg:min-w-[300px] duration-300"}`}
      ></div>

      <aside
        className={`fixed h-full w-[300px] pb-16 max-h-[100vh] overflow-y-scroll scroller bg-white z-50 duration-300 ${
          isMenuOpen ? "left-[-300px]" : "left-0"
        } z-50 shadow-[0px_0px_20px_rgba(1,41,112,0.1)]`}
      >
        <ul className="pb-2 pt-2 pr-5 pl-2 ">
          <li>
            <div className="cursor-pointer group">
              <NavLink
                to={"/"}
                className={`flex items-center  justify-between  px-[10px] py-[10px] group-hover:bg-[#dee8fc] rounded-sm duration-300  ${
                  pathname == "/" ? "bg-[#dee8fc] " : ""
                }`}
              >
                <div className="flex items-center gap-x-[6px] ">
                  {React.cloneElement(<MdHome size={16} />, {
                    className: `text-${
                      pathname == "/" ? "[#252d78]" : "[#899bbd]"
                    } group-hover:text-[#252d78] `,
                  })}

                  <p
                    className={`text-[13px] group-hover:text-[#252d78]  duration-300 font-semibold ${
                      pathname == "/" ? "text-[#252d78]" : "text-[#bfd0dd]"
                    }`}
                  >
                    Главная
                  </p>
                </div>
              </NavLink>
            </div>
          </li>
          {menus.map((menu, index) => (
            <li key={index} className="mb-1 border-b border-[#dee8fc]">
              <div className="cursor-pointer group">
                <NavLink
                  to={menu.title_link}
                  className={`flex items-center  justify-between  px-[10px] py-[10px] group-hover:bg-[#dee8fc] rounded-sm duration-300  ${
                    isActiveMenu(menu.links) ? "bg-[#dee8fc] " : ""
                  }`}
                >
                  <div className="flex items-center gap-x-[6px] ">
                    {React.cloneElement(menu.icon, {
                      className: `text-${
                        isActiveMenu(menu.links) ? "[#252d78]" : "[#899bbd]"
                      } group-hover:text-[#252d78] `,
                    })}

                    <p
                      className={`text-[13px] group-hover:text-[#252d78]  duration-300 font-semibold ${
                        isActiveMenu(menu.links)
                          ? "text-[#252d78]"
                          : "text-[#bfd0dd]"
                      }`}
                    >
                      {menu.title}
                    </p>
                  </div>
                </NavLink>
              </div>
              <div className={`overflow-hidden transition-all duration-300 `}>
                <ul>
                  {menu.links.map((link, idx) => (
                    <>
                      <li key={idx}>
                        <NavLink
                          to={link.link}
                          className={`flex items-center gap-x-2 text-[13.2px] font-semibold pl-[30px] py-[10px] leading-5 duration-300 ${
                            pathname === link.link
                              ? "text-[#252d78]"
                              : "text-[#bfd0dd] hover:text-[#252d78]"
                          }`}
                        >
                          {link.title}
                        </NavLink>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex max-md:flex-col md:items-center justify-between max-md:justify-start ml-2 mr-5 ">
          <div className="flex text-[#252d78]  text-sm items-center gap-x-1">
            <FaMoneyBillTransfer size={18} />
            <p className="md:pr-4 ">Курс: 98.85</p>
          </div>
          <NavLink
            className={` flex cursor-pointer text-[#252d78] text-sm  items-center gap-x-1  `}
          >
            <IoExitOutline size={20} />
            <p>Выйти</p>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
