import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

const PaymentList = () => {
  return (
    <menu className="custom-table flex items-center justify-center w-full">
      <DataTable
        rows={10}
        tableStyle={{ minWidth: "83rem" }}
        scrollable
        rowClassName={() => "dataTableRow"}
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
          field="Валюта"
          header="Валюта"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Сумма в USDT"
          header="Сумма в USDT"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Метод Трансфера"
          header="Метод Трансфера"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Сумма вычета в USDT"
          header="Сумма вычета в USDT"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Статус"
          header="Статус"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Адрес"
          header="Адрес"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Хэш транзакции"
          header="Хэш транзакции"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Время создания"
          header="Время создания"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Время обновления"
          header="Время обновления"
          headerStyle={{ borderBottom: "1px solid #D4DAE2", padding: "8px" }}
        ></Column>
      </DataTable>
    </menu>
  );
};

export default PaymentList;
