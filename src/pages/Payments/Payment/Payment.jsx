import React from "react";
import PaymentList from "./PaymentList/PaymentList";

const Payment = () => {
  return (
    <menu className="flex overflow-hidden items-center justify-center w-full p-[20px]">
      <div className="w-full px-12 ">
        <div className="w-full md:flex gap-x-3 items-center">
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
        </div>
        <PaymentList />
      </div>
    </menu>
  );
};

export default Payment;
