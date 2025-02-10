import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { refillsList } from "../../../../features/refillisList/refillsListSlice";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaImages } from "react-icons/fa";
import ReportModal from "../ReportModal/ReportModal";
import "./refillsTable.css";
import { FaSquarePollHorizontal } from "react-icons/fa6";
const RefillsTable = () => {
  const [report, setReport] = useState(false);
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
  const [formData, setFormData] = useState({ page: 1 });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refillsList({ page: formData.page }));
  }, [dispatch, formData]);
  const handleSubmit = () => {
    const updatedFilters = { ...filters };

    if (updatedFilters.end_time) {
      updatedFilters.created_at_before = `${filters.created_at_before}T${updatedFilters.end_time}`;
    }

    if (updatedFilters.start_time) {
      updatedFilters.created_at_after = `${filters.created_at_after}T${updatedFilters.start_time}`;
    }

    dispatch(refillsList({ page: formData.page, filters: updatedFilters }));
  };

  const { data, loading, error, next, previous } = useSelector(
    (state) => state.refillsList
  );
  const formattedData = data?.map((item) => ({
    id: item.id,
    Статус: item.status,
    Платеж: item.payment,
    Сумма: item.amount,
    Квитанция: item.receipt,
    "Дата создания": item.created_at
      ? new Date(item.created_at).toLocaleString()
      : "N/A",
    "Дата обновления": item.updated_at
      ? new Date(item.updated_at).toLocaleString()
      : "N/A",
  }));

  const renderTruncatedText = (value, maxLength = 10) => {
    const stringValue = String(value);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span title={stringValue}>
          {stringValue.length > maxLength
            ? `${stringValue.substring(0, maxLength)}...`
            : stringValue}
        </span>
      </div>
    );
  };

  const handleNextPage = () => {
    if (next) {
      setFormData((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      setFormData((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  };

  const StyledMenu = styled.div`
    flex: 1;
    overflow: hidden;
    justify-content: center;
    width: 100%;
    padding: 20px;
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #1a222c;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #1a222c;
    }
    * {
      scrollbar-width: thin;
      scrollbar-color: #1a222c #f1f1f1;
    }
  `;
  return (
    <>
      <div className="max-[400px]:flex flex-wrap grid grid-cols-6 max-[1400px]:grid-cols-4 max-md:grid-cols-2  gap-2 items-center">
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
        {/* <input
          name="Время начала"
          value={filters.start_time}
          onChange={handleStartTimeChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="Время начала"
          type="text"
        /> */}
        <input
          name="created_at_before"
          value={filters.created_at_before}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          type="date"
        />
        {/* <input
          name="Время окончания"
          value={filters.end_time}
          onChange={handleEndTimeChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
          placeholder="Время окончания"
          type="text"
        /> */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="w-full rounded-lg border-[#3d4d60] border bg-[#1D2A39] text-white py-2 px-5 outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
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
      <menu  className="flex  flex-col overflow-hidden custom-table justify-center w-full max-[1200px]:px-10">
        <div
          title="Report"
          className="w-full flex justify-end pr-5 max-[400px]:mt-5"
        >
          <FaSquarePollHorizontal
            size={30}
            className="cursor-pointer"
            color="#fff"
            onClick={() => setReport(!report)}
          />
          <ReportModal setReport={setReport} report={report} />
        </div>
        <StyledMenu>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-white">Нет доступных данных</p>
          ) : (
            <>
              <DataTable
                rows={10}
                // tableStyle={{ minHeight: "100vh" }}
                scrollable
                value={formattedData}
                style={{
                  userSelect: "text",
                  overflowX: "auto",
                  color: "white",
                }}
                className="refills_table"
              >
                <Column
                  field="id"
                  header="ID"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Статус"
                  header="Статус"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Платеж"
                  header="Платеж"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                  body={(rowData) => renderTruncatedText(rowData.Платеж)}
                />
                <Column
                  field="Сумма"
                  header="Сумма"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Квитанция"
                  header="Квитанция"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                  body={(rowData) => (
                    <NavLink
                      to={rowData.Квитанция}
                      target="_blank"
                      className={"flex items-center gap-x-1"}
                    >
                      <FaImages />
                      {renderTruncatedText(rowData.Квитанция)}
                    </NavLink>
                  )}
                />
                <Column
                  field="Дата создания"
                  header="Дата создания"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Дата обновления"
                  header="Дата обновления"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
              </DataTable>

              <div className="pagination text-white flex justify-center gap-x-2 ">
                <button
                  className="cursor-pointer"
                  onClick={handlePreviousPage}
                  disabled={!previous}
                >
                  <FaAngleLeft size={25} />
                </button>
                <span>{formData["page"]}</span>
                <button
                  className="cursor-pointer"
                  onClick={handleNextPage}
                  disabled={!next}
                >
                  <FaAngleRight size={25} />
                </button>
              </div>
            </>
          )}
        </StyledMenu>
      </menu>
    </>
  );
};

export default RefillsTable;
