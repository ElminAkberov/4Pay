import React from "react";
import PaymentList from "./PaymentList/PaymentList";

const Payment = () => {
  return (
    <menu className="flex overflow-hidden items-center justify-center w-full p-[20px]">
      <div className="w-full px-12 ">
        <div className="w-full md:flex gap-x-3 items-center">
          <input
            className="bg-white w-full max-md:mb-4 px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
            placeholder="Поиск"
            type="text"
          />
          <input
            className="bg-white w-full px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
            placeholder="Поиск по UUID"
            type="text"
          />
          <button className="min-[992px]:min-w-[215px] w-full hover:bg-[#0dcaf0] hover:text-black px-[12px] py-[6px] border border-[#0dcaf0] text-[#0dcaf0] rounded-sm  my-4 duration-200 cursor-pointer">
            Найти
          </button>
        </div>
        <PaymentList />
      </div>
    </menu>
  );
};

export default Payment;
