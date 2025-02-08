import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentsLists } from "../../../../features/paymentList/paymentListSlice";
import styled from 'styled-components';

const PaymentList = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.paymentList);

  useEffect(() => {
    dispatch(paymentsLists(formData));
  }, [dispatch]);

  const formattedData = data
  ? data.results.map((item) => ({
      id: item.id ?? "пусто",
      Сумма: item.sum ?? "пусто",
      Валюта: item.currency ?? "пусто",
      Тип: item.type ?? "пусто",
      Статус: item.status ?? "пусто",
      "Время создания": item.created_at
        ? new Date(item.created_at).toLocaleString()
        : "пусто",
      "Время обновления": item.updated_at
        ? new Date(item.updated_at).toLocaleString()
        : "пусто",
      Гео: item.geo ?? "пусто",
      "Внешний ID": item.outter_id_from_form ?? "пусто",
      "Страна работы": item.work_country ?? "пусто",
      Провайдер: item.provider ?? "пусто",
      Мерчант: item.merchant ?? "пусто",
      "GUID платежа": item.payment_guid ?? "пусто",
      "ID платежа провайдера": item.provider_payment_id ?? "пусто",
      "ID платежа мерчанта": item.merchant_payment_id ?? "пусто",
      Реквизиты: item.requisite ?? "пусто",
      Мультивалютность: item.multi_currency ?? "пусто",
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
    <menu className="flex overflow-hidden custom-table justify-center w-full p-5 max-[1200px]:px-10">
   <StyledMenu>
   
    <DataTable
      value={formattedData}
      rows={10}
      // tableStyle={{ minWidth: "100vh"}}
    
      rowClassName={() => "dataTableRow"}
      style={{height:"100vh", userSelect: "text", color: "white", overflowX:"auto" }}
    >
      <Column
        field="id"
        header="ID"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center", padding: "0.5rem" }}
      />
      <Column
        field="Сумма"
        header="Сумма"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
      />
      <Column
        field="Валюта"
        header="Валюта"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
      />
      <Column
        field="Тип"
        header="Тип"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData.Тип)}
      />
      <Column
        field="Статус"
        header="Статус"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "15px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData.Статус)}
      />
      <Column
        field="Время создания"
        header="Время создания"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
      />
      <Column
        field="Время обновления"
        header="Время обновления"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
      />
      <Column
        field="Гео"
        header="Гео"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
      />
      <Column
        field="Внешний ID"
        header="Внешний ID"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData["Внешний ID"])}
      />
      <Column
        field="Страна работы"
        header="Страна работы"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData["Страна работы"])}
      />
      <Column
        field="Провайдер"
        header="Провайдер"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData.Провайдер)}
      />
      <Column
        field="Мерчант"
        header="Мерчант"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData.Мерчант)}
      />
      <Column
        field="GUID платежа"
        header="GUID платежа"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) =>
          renderTruncatedText(rowData["GUID платежа"], 10, true)
        }
      />
      <Column
        field="ID платежа провайдера"
        header="ID платежа провайдера"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) =>
          renderTruncatedText(rowData["ID платежа провайдера"], 10, true)
        }
      />
      <Column
        field="ID платежа мерчанта"
        header="ID платежа мерчанта"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) =>
          renderTruncatedText(rowData["ID платежа мерчанта"], 10, true)
        }
      />
      <Column
        field="Реквизиты"
        header="Реквизиты"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData.Реквизиты, 10, true)}
      />
      <Column
        field="Мультивалютность"
        header="Мультивалютность"
        headerStyle={{
          textAlign: "center",
          borderBottom: "1px solid #D4DAE2",
          padding: "10px",
          width: "100px",
        }}
        bodyStyle={{ textAlign: "center" }}
        body={(rowData) => renderTruncatedText(rowData.Мультивалютность)}
      />
    </DataTable>
    </StyledMenu>
  </menu>
  );
};

export default PaymentList;
