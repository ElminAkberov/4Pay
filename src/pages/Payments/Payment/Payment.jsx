import React from "react";
import PaymentList from "./PaymentList/PaymentList";
import { NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <menu className="flex overflow-hidden items-center justify-center w-full">
      <div className="w-[100%]">
        <div className="w-full lg:flex gap-x-3 items-center p-6">
          <input
            className="w-full rounded-lg border border-[#3d4d60] satoshi bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
            placeholder="Поиск"
            type="text"
          />
          <input
            className="w-full rounded-lg border border-[#3d4d60] satoshi bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
            placeholder="Поиск по UUID"
            type="text"
          />
          <button className="min-[992px]:min-w-[215px] w-full hover:bg-[#1C2434] hover:text-white py-2 px-5 border border-[#fff] text-[#fff] rounded-sm  my-4 duration-300 cursor-pointer">
            Найти
          </button>
          <button className="min-[992px]:min-w-[215px] w-full text-center hover:bg-[#1C2434] hover:text-white py-2 px-5 border border-[#fff] text-[#fff] rounded-sm  my-4 duration-300 cursor-pointer">
          <NavLink to={"/payments/create"}>Подать апелляцию</NavLink>

          </button>
        </div>
        <PaymentList />
      </div>
    </menu>
  );
};

export default Payment;
