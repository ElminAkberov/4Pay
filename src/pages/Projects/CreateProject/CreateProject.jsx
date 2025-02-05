import React from "react";

const CreateProject = () => {
  return (
    <menu className="flex items-center justify-center w-full p-[20px]">
      <div className="min-md:w-1/3"></div>
      <form className="min-md:w-1/2 ">
        <fieldset>
          <div className="w-full">
            <label htmlFor="id_amount_in_usdt" className="block text-[#444]">
              Название:
            </label>
            <input
              className="bg-white w-full  px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="Введите название проекта"
              type="text"
            />
          </div>
          <div className="w-full">
            <label htmlFor="id_amount_in_usdt" className="block text-[#444]">
              Урл вебхука:
            </label>
            <input
              className="bg-white w-full  px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              placeholder="Введите урл вебхука"
              type="text"
            />
          </div>
          <div className="w-full">
            <label htmlFor="id_amount_in_usdt" className="block text-[#444]">
              Описание:
            </label>
            <textarea
              cols="40"
              rows="10"
              className="bg-white w-full  px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name="description"
              id="description"
              placeholder="Введите описание проекта"
            ></textarea>
          </div>
          <button className="hover:bg-[#0d6efd] hover:text-white px-[12px] py-[6px] border border-[#0d6efd] text-[#0d6efd] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Создать
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default CreateProject;
