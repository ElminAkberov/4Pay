import "../../global.css";
import { CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const [headerContent, setHeaderContent] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHeaderContent(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="px-4 bg-white py-3 sticky top-0 z-[600] w-full shadow-[0px_2px_20px_rgba(1,41,112,0.1)]">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-[10px]">
          <NavLink className="flex items-center gap-x-[6px] min-[1200px]:w-[280px]">
            <span className="nunito font-bold text-[#19205c] text-[26px] max-[991px]:hidden">
              4Pay
            </span>
          </NavLink>
          <CgMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size={38}
            color="#bfd0dd"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center relative ">
          <p className="px-4 ">Курс: 98.85</p>
          <div
            ref={menuRef}
            onClick={() => setHeaderContent(!headerContent)}
            className="flex items-center text-[#012970] cursor-pointer pl-2"
          >
            <div>tech_mb</div>
            <FaCaretDown />
          </div>
          <div
            className={`${
              !headerContent ? "opacity-0 invisible" : "opacity-100"
            } absolute duration-300 bg-white shadow-[0_5px_30px_0_rgba(82,63,105,0.2)] w-[240px] p-5 right-0 top-8 rounded-md`}
          >
            <h4 className="p-2 text-center font-medium text-[18px]">tech_mb</h4>
            <hr />
            <NavLink
              className={` flex cursor-pointer items-center gap-x-1 mt-1 `}
            >
              <IoExitOutline size={20} />
              <p>Выйти</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
