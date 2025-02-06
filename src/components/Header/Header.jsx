import "../../global.css";
import { CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";

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
    <header className="px-4 bg-white py-2 sticky top-0 z-[600] w-full shadow-[0px_2px_20px_rgba(1,41,112,0.1)]">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-[10px]">
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center gap-x-[6px] cursor-pointer">
            <span className="nunito font-bold text-[#19205c] text-[26px] ">
              4Pay
            </span>
          </div>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
