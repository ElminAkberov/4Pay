import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createWithdrawal } from "../../../features/widthdraws/widthDrawsCreateSlice";

const Create = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.widthDrawCreate
  );

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name:", name, value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createWithdrawal(formData));
  };

  return (
    <menu className="flex items-center justify-center w-full p-[20px]">
      <div className="min-md:w-1/3"></div>
      <form className="min-md:w-1/3 " onSubmit={handleSubmit}>
        <fieldset>
          <div className="">
            <label htmlFor="id_balance" className="block">
              Баланс:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="0.0"
              disabled
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT с учетом ставки:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Направление вывода:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
              onChange={handleChange}
            >
              <option value="">Вывод</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="" selected>
                Пополнить Выплатной кошелек
              </option>
            </select>
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Ставка:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
              placeholder="9.5"
              disabled
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              OTP код:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Коммиссия на вывод:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="0.0"
              disabled
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Минимальный баланс:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="0.0"
              disabled
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Пользователь:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
              onChange={handleChange}
            >
              <option value="" selected>
                tech_mb
              </option>
            </select>
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Гео:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
              onChange={handleChange}
            >
              <option value="" selected>
                Россия
              </option>
            </select>
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
