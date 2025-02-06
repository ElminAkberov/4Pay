import "../../global.css";
import React from "react";

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className="px-4 bg-white py-2 sticky top-0 z-[600] w-full shadow-[0px_2px_20px_rgba(1,41,112,0.1)]">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-[10px]">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-x-[6px] cursor-pointer"
          >
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
