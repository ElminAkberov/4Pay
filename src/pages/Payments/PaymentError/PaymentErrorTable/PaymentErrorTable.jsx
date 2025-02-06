import Column from "antd/es/table/Column";
import { DataTable } from "primereact/datatable";
import React from "react";
import "./paymentError.css";

const PaymentErrorTable = () => {
  const data = [
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
    {
      id: 45840989,
      Мерчант: "tech_mb",
      Имябанка: "UNKNOWN",
      ГЕО: "Россия",
      Сумма: "7000.00",
      Oперации: "to_sbp_number",
      Текстошибки: "No available cards.",
      Кодошибки: "40006",
      Oшибки: "Янв. 30, 2025, 16:31",
    },
  ];
  return (
    <div className="">
      <DataTable
        rows={10}
        tableStyle={{ minWidth: "83rem" }}
        scrollable
        value={data}
        className="payment_error"
        style={{ userSelect: "text", overflowX: "auto" }}
      >
        <Column
          field="id"
          header="ID"
          headerStyle={{
            borderBottom: "1px solid #D4DAE2",
            paddingRight: "20px",
          }}
        ></Column>
        <Column
          field="Мерчант"
          header="Мерчант"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Имябанка"
          header="Имя банка"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="ГЕО"
          header="ГЕО"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Сумма"
          header="Сумма"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Oперации"
          header="Oперации"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>

        <Column
          field="Текстошибки"
          header="Текс тошибки"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Кодошибки"
          header="Код ошибки"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>

        <Column
          field="Oшибки"
          header="Дата появление ошибки"
          headerStyle={{ borderBottom: "1px solid #D4DAE2", padding: "8px" }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default PaymentErrorTable;
