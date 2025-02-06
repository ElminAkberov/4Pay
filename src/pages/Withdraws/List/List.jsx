import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const List = () => {
  return (
    <menu className="flex overflow-hidden custom-table justify-center w-full p-5 max-[1200px]:px-10">
      <DataTable
       rows={10}
       tableStyle={{ minWidth: "80rem" }}
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

export default List;
