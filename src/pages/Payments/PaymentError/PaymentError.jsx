import React, { useState } from "react";
import PaymentErrorTable from "./PaymentErrorTable/PaymentErrorTable";
import { FaCaretDown } from "react-icons/fa";

const PaymentError = () => {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  return (
    <menu className="flex overflow-hidden items-center justify-center w-full p-[20px]">
      <div className="w-full px-2">
        <div className="w-full grid min-[1400px]:grid-cols-5 max-[1400px]:flex-col gap-x-3 items-center">
          <div className="relative w-full ">
            <button
              onClick={() => setisDropdownOpen(!isDropdownOpen)}
              className="text-left  flex items-center justify-between w-full hover:bg-[#0dcaf0] hover:text-black p-[6px] border border-[#0dcaf0] text-[#0dcaf0] rounded-sm  my-4 duration-200 cursor-pointer"
            >
              Выберите мерчантов
              <FaCaretDown className="absolute right-1" />
            </button>
            <ul
              className={`select_merchant duration-300 bg-white z-30 p-4 w-full absolute ${
                isDropdownOpen ? "opacity-100" : "opacity-0 invisible"
              }`}
            >
              <li className="flex items-center gap-x-1">
                <label htmlFor="dropdown-item">
                  <input type="checkbox" />
                </label>
                1win
              </li>
            </ul>
          </div>
          <select className="bg-white w-full max-[1400px]:mb-4 p-[6px] rounded-sm border border-[#ced4da] form-input duration-200">
            <option value="">Выберите текст ошибки</option>
          </select>
          <select className="bg-white w-full max-[1400px]:mb-4 p-[6px] rounded-sm border border-[#ced4da] form-input duration-200">
            <option value="Выберите гео">Выберите гео</option>
            <option value="Азебайджан">Азербайджан</option>
            <option value="Казахстан">Казахстан</option>
            <option value="Россия">Россия</option>
            <option value="Узбекистан">Узбекистан</option>
          </select>
          <label htmlFor="startdate">
            <input
              className="bg-white w-full max-[1400px]:mb-4 px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="date"
            />
          </label>
          <label htmlFor="enddate">
            <input
              className="bg-white w-full max-[1400px]:mb-4 px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="date"
            />
          </label>
          <input
            className="bg-white w-full px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
            placeholder="Код ошибки"
            type="text"
          />
          <button className=" w-full hover:bg-[#0dcaf0] hover:text-black px-[12px] py-[6px] border border-[#0dcaf0] text-[#0dcaf0] rounded-sm  my-4 duration-200 cursor-pointer">
            Найти
          </button>
          <button className=" w-full hover:bg-[#0dcaf0] hover:text-black px-[12px] py-[6px] border border-[#0dcaf0] text-[#0dcaf0] rounded-sm  mt-4 mb-4 duration-200 cursor-pointer">
            Скачать данные
          </button>
        </div>
        <PaymentErrorTable />
      </div>
    </menu>
  );
};

export default PaymentError;
