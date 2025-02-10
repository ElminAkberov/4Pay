import React, { useState } from "react";
import PaymentErrorTable from "./PaymentErrorTable/PaymentErrorTable";
import { FaCaretDown } from "react-icons/fa";
import { ConfigProvider, Input, Select } from "antd";

const PaymentError = () => {

  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  return (
    <menu className="flex overflow-hidden items-center justify-center w-full p-[20px]">
      <div className="w-full px-2 ">
        {/* <div className="w-full grid min-[1400px]:grid-cols-5 max-[1400px]:flex-col gap-x-3 items-center">
          <div className="relative w-full ">
            <button
              onClick={() => setisDropdownOpen(!isDropdownOpen)}
              className="text-left text-[14px] flex items-center justify-between w-full hover:bg-[#3d4d60] hover:text-white p-[5px] py-2 pl-[10px] border border-[#3d4d60] text-[#fff] rounded-sm  my-4 duration-200 cursor-pointer"
            >
              Выберите мерчантов
              <FaCaretDown className="absolute right-1" />
            </button>
            <ul
              className={`select_merchant duration-300  bg-[#3d4d60] text-white shadow-xl rounded-sm z-30 p-4 w-full absolute ${
                isDropdownOpen ? "opacity-100" : "opacity-0 invisible"
              }`}
            >
              <li className="flex items-center  gap-x-1">
                <label htmlFor="dropdown-item">
                  <input type="checkbox" />
                </label>
                1win
              </li>
            </ul>
          </div>
          <select
            defaultValue={"Выберите текст ошибки"}
            className="w-full max-[1400px]:mb-4 rounded-lg border-[#3d4d60] border bg-[#1D2A39] text-white py-2 px-5 outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
          >
            <option value="">Выберите текст ошибки</option>
          </select>

          <select
            defaultValue={"Выберите гео"}
            className="w-full max-[1400px]:mb-4 rounded-lg border-[#3d4d60] border bg-[#1D2A39] text-white py-2 px-5 outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "

          >
            <option value="Выберите гео"> Выберите гео</option>
            <option value="Азебайджан"> Азербайджан</option>
            <option value="Казахстан">Казахстан</option>
            <option value="Россия">Россия</option>
            <option value="Узбекистан">Узбекистан</option>
          </select>
          <label htmlFor="startdate">
            <input
              className="w-full max-[1400px]:mb-4 rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              type="date"
            />
          </label>
          <label htmlFor="enddate">
            <input
              className="w-full max-[1400px]:mb-4 rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              type="date"
            />
          </label>
          <input
            className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
            placeholder="Код ошибки"
            type="text"
          />
          <button className=" w-full hover:bg-[#3d4d60] px-[12px] py-2 border border-[#fff] text-[#fff] rounded-sm  my-4 duration-200 cursor-pointer">
            Найти
          </button>
          <button className=" w-full hover:bg-[#3d4d60] text-white px-[12px] py-2 border border-[#fff] rounded-sm  mt-4 mb-4 duration-200 cursor-pointer">
            Скачать данные
          </button>
        </div> */}
        <PaymentErrorTable />
      </div>
    </menu>
  );
};

export default PaymentError;
