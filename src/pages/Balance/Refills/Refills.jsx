import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import '../Refill.css'

const Refills = () => {
  const data = [
    {
      id: 27006,
      Создатель: "TestTraderTransaction",
      USDT: "5000.00",
      Курс: "200",
      Сумма: "501250.00",
      Хэш: "9a0a73844484b5fca732fcc6d30d9228ffef0f73e02e563cc717921a94b36f78",
      Статус: "Успешно",
      Маркет: "-",
      Способ: "501250.00",
      Датасоздания: "Янв. 30, 2025, 16:31",
      Датаобновления: "Янв. 30, 2025, 16:31",
    },
  ];
  return (
    <menu className="custom-table flex items-center justify-center w-full p-[20px]">
      <DataTable
        rows={10}
        tableStyle={{ minWidth: "83rem" }}
        scrollable
        value={data}
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
          field="Создатель"
          header="Создатель"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="USDT"
          header="USDT"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Курс"
          header="Курс"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Сумма"
          header="Сумма"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Статус"
          header="Статус"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>

        <Column
          field="Хэш"
          header="Хэш транзакции"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Маркет"
          header="Маркет"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Способ"
          header="Способ"
          headerStyle={{ borderBottom: "1px solid #D4DAE2", padding: "8px" }}
        ></Column>
        <Column
          field="Датасоздания"
          header="	Дата создания"
          headerStyle={{ borderBottom: "1px solid #D4DAE2", padding: "8px" }}
        ></Column>
        <Column
          field="Датаобновления"
          header="Дата обновления"
          headerStyle={{ borderBottom: "1px solid #D4DAE2", padding: "8px" }}
        ></Column>
      </DataTable>
    </menu>
  );
};

export default Refills;
