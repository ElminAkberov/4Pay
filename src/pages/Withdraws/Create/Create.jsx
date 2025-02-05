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
            <input
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
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT с учетом ставки:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
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
            >
              <option value="">Вывод</option>
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
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              OTP код:
            </label>
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
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
            >
              <option value="" selected>
                Россия
              </option>
            </select>
          </div>
          <button className="hover:bg-[#0d6efd] hover:text-white px-[12px] py-[6px] border border-[#0d6efd] text-[#0d6efd] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Конвертировать
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default Create;
