import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
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
            <Input type="text" />
          </div>
          <div>
            <label htmlFor="" className="block">
              Валюта:
            </label>
            <Select
              style={{
                borderColor: "#05256B",
              }}
              className="w-full px-[12px] py-[6px] duration-200"
            >
              <Option>Рубль</Option>
            </Select>
          </div>

          <button className="hover:bg-[#0a58ca] hover:border-[#0a58ca] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#fff] bg-[#05256b] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Сохранить
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default RefillsCreate;
