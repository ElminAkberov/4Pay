import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { createWithdrawal } from "../../../features/widthdraws/widthDrawsCreateSlice";
import { MdContentCopy } from "react-icons/md";

const List = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createWithdrawal(formData));
  }, []);

  const { data, loading } = useSelector((state) => state.widthDrawCreate);

  useEffect(() => {
    dispatch(createWithdrawal({}));
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span title={stringValue}>
          {stringValue.length > maxLength ? `${stringValue.substring(0, maxLength)}...` : stringValue}
        </span>
        {showCopyIcon && (
          <MdContentCopy
            style={{ marginLeft: "5px", cursor: "pointer" }}
            onClick={() => navigator.clipboard.writeText(stringValue)}
          />
        )}
      </div>
    );
  };

  return (
    <menu className="flex overflow-hidden custom-table justify-center w-full p-5 max-[1200px]:px-10 ">
      <DataTable
        value={formattedData}
        rows={10}
        tableStyle={{  minHeight: "100vh" }}
        scrollable
        rowClassName={() => "dataTableRow"}
        style={{ userSelect: "text", color: "white" , }}
      >
        <Column
          field="id"
          header="ID"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px", width: "100px" }}
          bodyStyle={{ textAlign: "center", padding: "1rem" }}
        ></Column>
        <Column
          field="Пользователь"
          header="Пользователь"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px", width: "100px" }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Пользователь)}
        ></Column>
        <Column
          field="Pедактор"
          header="Pедактор"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px", width: "100px" }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Pедактор)}
        ></Column>
        <Column
          field="Сумма в USDT"
          header="Сумма в USDT"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px", width: "100px" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          field="Метод Трансфера"
          header="Метод Трансфера"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2",  width: "100px", }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData["Метод Трансфера"])}
        ></Column>
        <Column
          field="Сумма вычета в USDT"
          header="Сумма вычета в USDT"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px", width: "100px" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          field="Вычет"
          header="Вычет"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px", width: "100px" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          field="Статус"
          header="Статус"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "15px", width: "100px" }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Статус)}
        ></Column>
        <Column
          field="Адрес"
          header="Адрес"
          headerStyle={{ width: "100px", textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "20px" }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData.Адрес, 10, true)} 
        ></Column>
        <Column
          field="Хэш транзакции"
          header="Хэш транзакции"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px" }}
          bodyStyle={{ textAlign: "center" }}
          body={(rowData) => renderTruncatedText(rowData["Хэш транзакции"], 10, true)} 
        ></Column>
        <Column
          field="Время создания"
          header="Время создания"
          headerStyle={{ textAlign: "center", borderBottom: "1px solid #D4DAE2", padding: "10px" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
      </DataTable>
    </menu>
  );
};

export default List;
