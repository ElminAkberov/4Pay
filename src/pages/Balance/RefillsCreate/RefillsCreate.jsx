import React from "react";

const RefillsCreate = () => {
  return (
    <menu className="flex items-center justify-center w-full p-[20px]">
      <div className="min-md:w-1/4"></div>
      <form className="min-md:w-1/2">
        <h2 className="nunito text-[31px] text-[#444]">Закинуть USDT</h2>
        <fieldset>
          <div className="">
            <label htmlFor="" className="block">
              Хэш транзакции:
            </label>
            <input
              type="text"
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
            />
          </div>
          <div className="">
            <label htmlFor="" className="block">
              Валюта:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
            >
              <option value="default">Рубль</option>
            </select>
          </div>

          
          <button className="hover:bg-[#0a58ca] hover:text-white px-[12px] py-[6px] border border-[#0d6efd] text-[#fff] bg-[#0d6efd] rounded-sm w-full my-4 duration-200 cursor-pointer">
          Сохранить
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default RefillsCreate;
