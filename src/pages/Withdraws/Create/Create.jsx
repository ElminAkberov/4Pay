import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const Create = () => {
  return (
    <menu className="flex items-center justify-center w-full p-[20px]">
      <div className="min-md:w-1/3"></div>
      <form className="min-md:w-1/3 ">
        <fieldset>
          <div className="">
            <label htmlFor="id_balance" className="block">
              Баланс:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="0.0"
              disabled
              type="text"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT с учетом ставки:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Направление вывода:
            </label>
            <Select
              defaultValue="Вывод"
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] form-input duration-200"
            >
              <Option value="Вывод">Вывод</Option>
              <Option value="Пополнить">Пополнить Выплатной кошелек</Option>
            </Select>
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Ставка:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
              placeholder="9.5"
              disabled
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              OTP код:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Коммиссия на вывод:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="0.0"
              disabled
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Минимальный баланс:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="0.0"
              disabled
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Пользователь:
            </label>
            <Select
              defaultValue={"tech_mb"}
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] form-input duration-200"
              name=""
              id=""
            >
              <Option value="" >
                tech_mb
              </Option>
            </Select>
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Гео:
            </label>
            <Select
            defaultValue={"Россия"}
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] form-input duration-200"
              name=""
              id=""
            >
              <Option value="" >
                Россия
              </Option>
            </Select>
          </div>
          <button className="hover:bg-[#05256b] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#05256b] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Конвертировать
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default Create;
