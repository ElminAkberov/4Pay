import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const Project = () => {
  return (
    <menu className="flex custom-table justify-center w-full p-5 max-[1200px]:px-10">
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
          field="Название"
          header="Название"
          headerStyle={{ borderBottom: "1px solid #D4DAE2" }}
        ></Column>
        <Column
          field="Webhook"
          header="Webhook"
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
          headerStyle={{ borderBottom: "1px solid #D4DAE2",padding:"8px" }}
        ></Column>
      </DataTable>
    </menu>
  );
};

export default Project;
