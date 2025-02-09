import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { refillsList } from "../../../../features/refillisList/refillsListSlice";
import styled from "styled-components";
import "./refillsTable.css";

const RefillsTable = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refillsList(formData));
  }, [dispatch]);

  const { data, loading } = useSelector((state) => state.refillsList);

  const formattedData = data
    ? data.map((item) => ({
        id: item.id,
        Статус: item.status,
        Платеж: item.payment,
        Сумма: item.amount,
        Квитанция: item.receipt,
        "Дата создания": new Date(item.created_at).toLocaleString(),
        "Дата обновления": new Date(item.updated_at).toLocaleString(),
      }))
    : [];


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

  const StyledMenu = styled.div`
    flex: 1;
    overflow: hidden;
    justify-content: center;
    width: 100%;
    padding: 20px;

    /* WebKit tarayıcıları için */
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #1a222c; /* Scrollbar rengi */
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #1a222c; /* Hover rengi */
    }

    /* Firefox için */
    * {
      scrollbar-width: thin;
      scrollbar-color: #1a222c #f1f1f1; /* Scrollbar rengi ve track rengi */
    }
  `;

  return (
    <>
      <menu className="flex overflow-hidden custom-table justify-center w-full  max-[1200px]:px-10">
      <StyledMenu>
        <DataTable
          rows={10}
          tableStyle={{ minHeight: "100vh" }}
          scrollable
          value={formattedData}
          style={{ userSelect: "text", overflowX: "auto", color: "white" }}
          className="refills_table"
        >
          <Column
            field="id"
            header="ID"
            headerStyle={{
              borderBottom: "1px solid #D4DAE2",
              padding:"1rem"
            }}
            bodyStyle={{ textAlign: "center", }}
          ></Column>
          <Column
            field="Статус"
            header="Статус"
            headerStyle={{ borderBottom: "1px solid #D4DAE2" ,padding:"1rem"}}
            bodyStyle={{ textAlign: "center" }}
           
          ></Column>
          <Column
            field="Платеж"
            header="Платеж"
            headerStyle={{ borderBottom: "1px solid #D4DAE2",padding:"1rem" }}
            bodyStyle={{ textAlign: "center" }}
            body={(rowData) => renderTruncatedText(rowData.Платеж)}
          ></Column>
          <Column
            field="Сумма"
            header="Сумма"
            headerStyle={{ borderBottom: "1px solid #D4DAE2",padding:"1rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
          <Column
            field="Квитанция"
            header="Квитанция"
            headerStyle={{ borderBottom: "1px solid #D4DAE2",padding:"1rem" }}
            bodyStyle={{ textAlign: "center" }}
            body={(rowData) => renderTruncatedText(rowData.Квитанция, 10, true)}
          ></Column>
          <Column
            field="Дата создания"
            header="Дата создания"
            headerStyle={{ borderBottom: "1px solid #D4DAE2", padding: "1rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
          <Column
            field="Дата обновления"
            header="Дата обновления"
            headerStyle={{ borderBottom: "1px solid #D4DAE2", padding: "1rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </StyledMenu>
      </menu>
 
    </>
  );
};

export default RefillsTable;
