import React from "react";

const Create = () => {
  return (
    <menu className="flex items-center justify-center  p-[20px] w-full max-w-[640px] mx-auto">
      <form className=" w-full">
        <fieldset>
          <div className="mb-2">
            <label htmlFor="id_balance" className="block">
              Баланс:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60]  bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] disabled:bg-[#ccc] "
              placeholder="0.0"
              disabled
              type="text"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              type="number"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT с учетом ставки:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              type="number"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Направление вывода:
            </label>

            <select
              defaultValue="Вывод"
              className="w-full rounded-lg border-[#3d4d60] border text-white bg-[#1D2A39] py-3 px-5 outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
            >
              <option value="Вывод">Вывод</option>
              <option value="Пополнить">Пополнить Выплатной кошелек</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Ставка:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0] disabled:bg-[#ccc] "
              type="number"
              placeholder="9.5"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              OTP код:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              type="number"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Коммиссия на вывод:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              placeholder="0.0"
              disabled
              type="number"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Минимальный баланс:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-3 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              placeholder="0.0"
              disabled
              type="number"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Пользователь:
            </label>

            <select
              className="w-full rounded-lg border-[#3d4d60] text-white border bg-[#1D2A39] py-3 px-5 outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              defaultValue={"tech_mb"}
              name=""
              id=""
            >
              <option value="">tech_mb</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="id_amount_in_usdt" className="block">
              Гео:
            </label>

            <select
              defaultValue={"Россия"}
              className="w-full rounded-lg border-[#3d4d60] text-white border bg-[#1D2A39] py-3 px-5 outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              name=""
              id=""
            >
              <option value="">Россия</option>
            </select>
          </div>
          <button className="hover:bg-[#1C2434] hover:text-white px-[12px] py-[6px] border border-[#fff] text-[#fff] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Конвертировать
          </button>
        </fieldset>
      </form>
    </menu>
  );
};

export default Create;
