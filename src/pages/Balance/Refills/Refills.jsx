import React, { useState } from "react";
import RefillsTable from "./RefillsTable/RefillsTable";
import { NavLink } from "react-router-dom";

const Refills = () => {
  const [filters, setFilters] = useState({
    id: "",
    trader_name: "",
    merchant_name: "",
    ordering: "",
    created_at_after: "",
    start_time: "",
    created_at_before: "",
    end_time: "",
    status: "",
  });
  const handleStartTimeChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    let cleanedValue = value;

    if (cleanedValue.length >= 3) {
      cleanedValue = cleanedValue.slice(0, 2) + ":" + cleanedValue.slice(2);
    }

    const timeParts = cleanedValue.split(":");
    if (timeParts[0] && parseInt(timeParts[0], 10) > 23) {
      cleanedValue = "23:" + (timeParts[1] ? timeParts[1] : "00");
    }

    if (timeParts[1] && parseInt(timeParts[1], 10) > 59) {
      cleanedValue = timeParts[0] + ":59";
    }

    if (cleanedValue.endsWith(":000")) {
      cleanedValue = cleanedValue.slice(0, -1);
    }

    setFilters({
      ...filters,
      start_time: cleanedValue,
    });
  };
  const handleEndTimeChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    let cleanedValue = value;

    if (cleanedValue.length >= 3) {
      cleanedValue = cleanedValue.slice(0, 2) + ":" + cleanedValue.slice(2);
    }

    const timeParts = cleanedValue.split(":");
    if (timeParts[0] && parseInt(timeParts[0], 10) > 23) {
      cleanedValue = "23:" + (timeParts[1] ? timeParts[1] : "00");
    }

    if (timeParts[1] && parseInt(timeParts[1], 10) > 59) {
      cleanedValue = timeParts[0] + ":59";
    }
    if (cleanedValue.endsWith(":000")) {
      cleanedValue = cleanedValue.slice(0, -1);
    }

    setFilters({
      ...filters,
      end_time: cleanedValue,
    });
  };
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    let fullDateTimeBefore = filters.created_at_before;
    let fullDateTimeAfter = filters.created_at_after;
    if (filters.end_time) {
      fullDateTimeBefore += `T${filters.end_time}`;
    }
    if (filters.start_time) {
      fullDateTimeAfter += `T${filters.start_time}`;
    }

    const updatedFilters = {
      ...filters,
      created_at_before: fullDateTimeBefore,
      created_at_after: fullDateTimeAfter,
    };

    console.log("Gönderilen Filtreler:", updatedFilters);
  };

  return (
    <menu className="custom-table overflow-hidden items-center justify-center w-full p-[20px]">
      <div className="max-[350px]:grid-cols-1 grid grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2  gap-2 items-center">
        <input
          name="id"
          value={filters.id}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="ID"
          type="text"
        />

        <input
          name="trader_name"
          value={filters.trader_name}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="Трейдер"
          type="text"
        />
        <input
          name="merchant_name"
          value={filters.merchant_name}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="Мерчант"
          type="text"
        />
        <input
          name="ordering"
          value={filters.ordering}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="Заказ"
          type="text"
        />
        <input
          name="created_at_after"
          value={filters.created_at_after}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          type="date"
        />
        <input
          name="Время начала"
          value={filters.start_time}
          onChange={handleStartTimeChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="Время начала"
          type="text"
        />
        <input
          name="created_at_before"
          value={filters.created_at_before}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          type="date"
        />
        <input
          name="Время окончания"
          value={filters.end_time}
          onChange={handleEndTimeChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="Время окончания"
          type="text"
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="w-full max-[1400px]:mb-4 rounded-lg border-[#3d4d60] border bg-[#1D2A39] text-white py-2 px-5 outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
        >
          <option value="">Статус</option>
          <option value="new">Новый</option>
          <option value="in_progress">В процессе</option>
          <option value="done">Готово</option>
          <option value="rejected">Отклонено</option>
        </select>
        <button
          onClick={handleSubmit}
          className="hover:bg-[#0a58ca] hover:border-[#0a58ca] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#fff] bg-[#05256b] rounded-sm w-full  duration-200 cursor-pointer"
        >
          Применить фильтр
        </button>
        <NavLink
          to={"/refills/create"}
          className="hover:bg-[#0a58ca] text-center hover:border-[#0a58ca] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#fff] bg-[#05256b] rounded-sm w-full  duration-200 cursor-pointer"
        >
          Подать апелляцию
        </NavLink>
      </div>
      <RefillsTable filters={filters} />
    </menu>
  );
};

export default Refills;
