import { ConfigProvider, Input, Select } from "antd";
import React from "react";

const RefillsCreate = () => {
  return (
    <menu className="flex items-center justify-center w-full p-[20px] !max-w-[640px] !mx-auto">
      <form className="w-full">
        <h2 className="nunito text-[31px] text-[#fff]">Создать апеляцию</h2>
        <fieldset className="w-full">
          <div className="mb-4 ">
            <label htmlFor="" className="block mb-2">
              Хэш транзакции:
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              Валюта:
            </label>
            <select
              defaultValue={"Рубль"}
              className="w-full rounded-lg border-[#3d4d60] border bg-[#1D2A39] py-3 px-5 text-[#fff] outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
            >
              <option value="rub">Рубль</option>
            </select>
          </div>

          <button className="hover:bg-[#0a58ca] hover:border-[#0a58ca] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#fff] bg-[#05256b] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Сохранить
          </button>
        </fieldset>
      </form>
    </menu>
  );
};

export default RefillsCreate;
