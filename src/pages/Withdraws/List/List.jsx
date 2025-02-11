import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { widthdrawList } from "../../../features/widthdraws/widthDrawsListSlice";
import { MdContentCopy } from "react-icons/md";
import Success from "../../../components/Success/Success";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import ReportModal from "./ReportModal/ReportModal";
import { NavLink } from "react-router-dom";

const List = () => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState({ successInfo: false, message: "" });
  const [report, setReport] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(widthdrawList(formData));
  }, []);

  const { data, loading } = useSelector((state) => state.widthdrawList);

  useEffect(() => {
    dispatch(widthdrawList({}));
  }, [dispatch]);

  const formattedData = data
    ? data.map((item) => ({
        id: item.id,
        Пользователь: item.user,
        Pедактор: item.editor,
        Вычет: item.rate,
        "Сумма в USDT": item.amount,
        "Метод Трансфера": item.transfer_method,
        "Сумма вычета в USDT": item.amount_with_rate,
        Статус: item.status,
        Адрес: item.address,
        "Хэш транзакции": item.hash_transaction,
        "Время создания": new Date(item.created_at).toLocaleString(),
      }))
    : [];

  const renderTruncatedText = (value, maxLength = 10, showCopyIcon = false) => {
    if (!value) return "";

    const stringValue = String(value);

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <span title={stringValue} style={{ flex: 1, textAlign: "center" }}>
          {stringValue.length > maxLength
            ? `${stringValue.substring(0, maxLength)}...`
            : stringValue}
        </span>
        {showCopyIcon && (
          <MdContentCopy
            style={{ marginLeft: "5px", cursor: "pointer" }}
            onClick={() => {
              navigator.clipboard.writeText(stringValue);
              setSuccess({
                successInfo: true,
                message: "Успешно скопировано!",
              });
              setTimeout(() => setSuccess({ successInfo: false }), 2000);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <menu className="flex flex-col overflow-hidden custom-table justify-center w-full p-5 max-[1200px]:px-10 ">
      <Success success={success["successInfo"]} message={success["message"]} />
      <div title="Report" className="w-full flex justify-end pr-5 gap-x-2">
        <NavLink
          to={"/withdraws/create"}
          className="hover:bg-[#0a58ca] text-center w-fit hover:border-[#0a58ca] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#fff] bg-[#05256b] rounded-sm  duration-200 cursor-pointer"
        >
          Подать апелляцию
        </NavLink>
        <FaSquarePollHorizontal
          size={30}
          className="cursor-pointer"
          color="#fff"
          onClick={() => setReport(!report)}
        />
        <ReportModal setReport={setReport} report={report} />
      </div>
      <DataTable
        value={formattedData}
        rows={10}
        tableStyle={{ minHeight: "100vh" }}
        scrollable
        style={{ userSelect: "text", color: "white" }}
      >
        <Column
          field="id"
          header="ID"
          headerStyle={{
            padding: "1rem",
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
          }}
          bodyStyle={{ textAlign: "center", padding: "1rem" }}
        ></Column>
        <Column
          field="Пользователь"
          header="Пользователь"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "0.5rem",
          }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Пользователь)}
        ></Column>
        <Column
          field="Pедактор"
          header="Pедактор"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "0.5rem",
          }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Pедактор)}
        ></Column>
        <Column
          field="Сумма в USDT"
          header="Сумма в USDT"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "10px",
          }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          field="Метод Трансфера"
          header="Метод Трансфера"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "10px",
            width: "150px",
          }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData["Метод Трансфера"])}
        ></Column>
        <Column
          field="Сумма вычета в USDT"
          header="Сумма вычета в USDT"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "10px",
            width: "150px",
          }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          field="Вычет"
          header="Вычет"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "10px",
            width: "100px",
          }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          field="Статус"
          header="Статус"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "1rem",
            width: "150px",
          }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Статус, 8)}
        ></Column>
        <Column
          field="Адрес"
          header="Адрес"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "2.5rem",
            width: "200px",
          }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Адрес, 8, true)}
        ></Column>
        <Column
          field="Хэш транзакции"
          header="Хэш транзакции"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "10px",
            width: "200px",
          }}
          bodyStyle={{ textAlign: "center", padding: "20px" }}
          body={(rowData) =>
            renderTruncatedText(rowData["Хэш транзакции"], 10, true)
          }
        ></Column>
        <Column
          field="Время создания"
          header="Время создания"
          headerStyle={{
            textAlign: "center",
            borderBottom: "1px solid #D4DAE2",
            padding: "10px",
            width: "200px",
          }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
      </DataTable>
    </menu>
  );
};

export default List;
