import React, { useContext, useState } from "react";
import { FaInbox } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { MdAccountBalance, MdHome } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";

const Sidebar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClick = (menuTitle) => {
    setSelectedMenu(selectedMenu === menuTitle ? null : menuTitle);
  };

  const menus = [
    {
      title: "Апеляции",
      title_link: "/refills",
      icon: <MdAccountBalance size={16} />,
      links: [{ title: "Подать апелляцию", link: "/refills/create" },
        { title: "Просмотр", link: "/refills" },

      ],
   
    },
    {
      title: "Выводы",
      title_link: "/withdraws/list",
      icon: <HiOutlineBanknotes size={16} />,
      links: [
        { title: "Создать заявку", link: "/withdraws/create" },
        { title: "Просмотр", link: "/withdraws/list" },
      ],
    },
    {
      title: "Заявки",
      title_link: "/payments/",
      icon: <FaInbox size={16} />,
      links: [
        { title: "Просмотр", link: "/payments/" },
        // { title: "Обращения", link: "/appeals/" },
        { title: "Создать Заявку", link: "/payments/create/" },
        { title: "Ошибки с платежами", link: "/payments/payment-errors" },
      ],
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
          <h2 className="text-white text-2xl comfortaa"><span className="text-4xl ">4</span>Pay <sup className="text-[14px]">&copy;</sup></h2>
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
            <li className="mb-2">
              <NavLink
                to="/"
                onClick={() => handleClick('Главная')}
                className={`${
                  pathname === "/home" ? "bg-[#333A48]" : ""
                } flex items-center justify-between hover:bg-[#333A48] text-[#dee4ee] py-3 px-4 cursor-pointer rounded-sm duration-300`}
              >
                <div className="flex items-center gap-x-1">
                  <MdHome size={16} />
                  <p className="font-medium">Главная</p>
                </div>
              </NavLink>
            </li>
            {menus.map((menu, index) => {
              const isActive = menu.links.some(link => pathname === link.link);
              return (
                <li key={index} className="mb-2">
                  <div
                    onClick={() => handleClick(menu.title)}
                    className={`flex items-center justify-between hover:bg-[#333A48] text-[#dee4ee] py-3 px-4 cursor-pointer rounded-sm duration-300 ${
                      selectedMenu === menu.title || isActive ? "bg-[#333A48]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-x-1">
                      {menu.icon}
                      <p className="font-medium">{menu.title}</p>
                    </div>
                    <IoChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        selectedMenu === menu.title || isActive ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`ml-10 transition-all duration-300 overflow-hidden ${
                      selectedMenu === menu.title || isActive ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <ul>
                      {menu.links.map((link, idx) => (
                        <li key={idx} className="my-3">
                          <NavLink
                            to={link.link}
                            className={`font-normal hover:text-[#fff] duration-300 ${
                              pathname === link.link ? "text-[#fff]" : "text-[#8A99AF]"
                            }`}
                          >
                            {link.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;