import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import "../Payment.css";
const Appeals = () => {
  return (
    <menu className=" custom-table w-full p-[20px]">
      <h1 className="nunito text-[40px] text-center text-[#444] mb-2">
        Обращения
      </h1>
      <DataTable
        rows={10}
        tableStyle={{ minWidth: "75rem" }}
        scrollable
        className="px-32 max-lg:px-16 max-md:px-4 duration-200"
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
          field="Номер платежа"
          header="Номер платежа"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Сумма"
          header="Сумма"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Чек"
          header="Чек"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Статус"
          header="Статус"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Карта"
          header="Карта"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Время подачи"
          header="Время подачи"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="ФИО"
          header="ФИО"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Мерчант"
          header="Мерчант"
          headerStyle={{ borderBottom: "1px solid #D4DAE2",padding:"8px" }}
        ></Column>
      </DataTable>
    </menu>
  );
};

export default Appeals;
