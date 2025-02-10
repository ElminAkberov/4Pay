import React, { useContext, useEffect, useRef, useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import { IoChevronDown } from "react-icons/io5";
import { Context } from "../../Context/ContextProvider";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/login/loginSlice";
import { getAccountInfo } from "../../features/account/accountSlice";
const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const [headerContent, setHeaderContent] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.account);
  useEffect(() => {
    dispatch(getAccountInfo());
  }, [dispatch]);

  const course = data?.balances?.map((balance) => balance.course);
  const currency = data?.balances?.map((balance) => balance.code);
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");
  // const { success, accessToken } = useSelector((state) => state.login);

  const navigate = useNavigate();
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

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <header className=" sticky top-0 right-0 w-full bg-[#1C2434] text-white py-3 px-3 shadow-xl z-[99999]">
      <div className="flex justify-between items-center ">
        <div className="flex items-center ml-2">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 lg:hidden  border border-[#ccc] rounded-sm mr-2"
          >
            <GrMenu size={25} color="#fff" />
          </div>
          <h2 className="text-white text-2xl comfortaa">
            <span className="text-4xl ">4</span>Pay{" "}
            <sup className="text-[10px]">&copy;</sup>
          </h2>
        </div>
        <div className="flex">
          <div className="flex max-md:hidden satoshi text-sm items-center gap-x-1">
            <FaMoneyBillTransfer size={20} />
            <p className="pr-4">
              Курс: {course} {currency}
            </p>
          </div>
          <div className="flex items-center gap-x-2 relative ">
            <div className="">
              <h4 className="satoshi">{username}</h4>
              <p className="text-[13px] text-right satoshi">{role}</p>
            </div>
            <div
              ref={menuRef}
              onClick={() => setHeaderContent(!headerContent)}
              className="flex items-center gap-x-1"
            >
              <div className="min-w-[50px] capitalize min-h-[50px] font-bold flex items-center justify-center bg-[#D1D1D9] text-[#1C2434] rounded-full cursor-pointer">
                {username && username[0]}
              </div>
              <IoChevronDown size={20} className="cursor-pointer" />
            </div>
            <div
              className={`${
                !headerContent ? "opacity-0 invisible" : "opacity-100"
              } w-[200px] md:h-[120px] h-[150px] rounded bg-[#24303F] p-4 text-[#fff] duration-300 shadow-2xl absolute z-[99999] right-0  top-16 `}
            >
              <div className="text-center mb-4">
                <h4>{username}</h4>
                <p>Role:{role}</p>
              </div>

              <hr />
              <div className=" py-1 flex flex-col items-center justify-center  ">
                <div
                  className="flex items-center gap-x-1 cursor-pointer"
                  onClick={handleLogout}
                >
                  <CiLogout />
                  Выйти
                </div>
                <div className="flex md:hidden satoshi text-sm items-center gap-x-1 ">
                  <FaMoneyBillTransfer size={20} />
                  <p className="pr-4">
                    Курс: {course} {currency}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
