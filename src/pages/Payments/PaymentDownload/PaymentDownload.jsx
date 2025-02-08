import React from "react";

const PaymentDownload = () => {
  return (
    <menu className="flex items-center justify-center w-full p-[20px]">
      <div className="min-md:w-1/4"></div>
      <form className="min-md:w-1/2">
        <h2 className="nunito text-[31px] text-[#444]">Скачать отчет</h2>
        <fieldset>
          <div className="min-md:flex gap-x-5 w-full">
            <div className="w-full">
              <label htmlFor="" className="block">
                С даты:
              </label>
              <input
                className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
                placeholder="0.0"
                type="date"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="block">
                По дату:
              </label>
              <input
                className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
                placeholder="0.0"
                type="date"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="block">
              Выберите статус:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
            >
              <option value="" selected="">
                Все
              </option>

              <option value="created">Создан</option>

              <option value="canceled">Отменен</option>

              <option value="completed">Завершен</option>

              <option value="deleted">Удален</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="" className="block">
              Тип отчета:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
            >
              <option value="default">Стандартный</option>

              <option value="external">Внешний</option>
            </select>
          </div>

          <div className="">
            <label htmlFor="" className="block">
              Гео:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
            >
              <option value="" selected="">
                Все
              </option>

              <option value="1">Россия</option>

              <option value="2">Узбекистан</option>

              <option value="3">Азербайджан</option>

              <option value="4">Казахстан</option>

              <option value="5">Кыргызстан</option>

              <option value="6">Турция</option>

              <option value="7">Таджикистан</option>
            </select>
          </div>
          <button className="hover:bg-[#0d6efd] hover:text-white px-[12px] py-[6px] border border-[#0d6efd] text-[#0d6efd] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Скачать
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default PaymentDownload;
