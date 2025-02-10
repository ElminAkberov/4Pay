import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentsLists } from "../../../../features/paymentList/paymentListSlice";
import styled from "styled-components";

const PaymentList = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.paymentList);

  useEffect(() => {
    dispatch(paymentsLists(formData));
  }, [dispatch]);

  const formattedData = data
    ? data.results.map((item) => ({
        id: item.id ?? "",
        Сумма: item.sum ?? "",
        Валюта: item.currency ?? "",
        Тип: item.type ?? "",
        Статус: item.status ?? "",
        "Время создания": item.created_at
          ? new Date(item.created_at).toLocaleString()
          : "",
        "Время обновления": item.updated_at
          ? new Date(item.updated_at).toLocaleString()
          : "",
        Гео: item.geo ?? "",
        "Внешний ID": item.outter_id_from_form ?? "",
        "Страна работы": item.work_country ?? "",
        Провайдер: item.provider ?? "",
        Мерчант: item.merchant ?? "",
        "GUID платежа": item.payment_guid ?? "",
        "ID платежа провайдера": item.provider_payment_id ?? "",
        "ID платежа мерчанта": item.merchant_payment_id ?? "",
        Реквизиты: item.requisite ?? "",
        Мультивалютность: item.multi_currency ?? "",
      }))
    : [];

  const allColumns = [
    { field: "id", header: "ID" },
    { field: "Сумма", header: "Сумма" },
    { field: "Валюта", header: "Валюта" },
    { field: "Тип", header: "Тип" },
    { field: "Статус", header: "Статус" },
    { field: "Время создания", header: "Время создания" },
    { field: "Время обновления", header: "Время обновления" },
    { field: "Гео", header: "Гео" },
    { field: "Внешний ID", header: "Внешний ID" },
    { field: "Страна работы", header: "Страна работы" },
    { field: "Провайдер", header: "Провайдер" },
    { field: "Мерчант", header: "Мерчант" },
    { field: "GUID платежа", header: "GUID платежа" },
    { field: "ID платежа провайдера", header: "ID платежа провайдера" },
    { field: "ID платежа мерчанта", header: "ID платежа мерчанта" },
    { field: "Реквизиты", header: "Реквизиты" },
    { field: "Мультивалютность", header: "Мультивалютность" },
  ];

  const activeColumns = allColumns.filter((column) =>
    formattedData.some((row) => row[column.field] !== "")
  );

  const renderTruncatedText = (value, maxLength = 10) => {
    if (!value) return "";
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

  return (
    <menu className="flex overflow-hidden custom-table justify-center w-full  max-[1200px]:px-10">
      <DataTable
        value={formattedData}
        rows={10}
        tableStyle={{ minHeight: "100vh" }}
        scrollable
        rowClassName={() => "dataTableRow"}
        style={{
          userSelect: "text",
          color: "white",
          overflowX: "auto",
        }}
      >
        {activeColumns.map((col) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            headerStyle={{
              textAlign: "center",
              borderBottom: "1px solid rgb(212, 218, 226)",
              padding: "1rem",
              width: "150px",
            }}
            bodyStyle={{ textAlign: "center", padding: "1rem" }}
            body={(rowData) => renderTruncatedText(rowData[col.field])}
          />
        ))}
      </DataTable>
    </menu>
  );
};

export default PaymentList;
