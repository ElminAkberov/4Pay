import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import Column from "antd/es/table/Column";
import "./paymentError.css";
import { paymentsErrorList } from "../../../../features/paymentList/paymentErrorListSlice";

const PaymentErrorTable = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.paymentList);

  useEffect(() => {
    dispatch(paymentsErrorList({}));
  }, [dispatch]);
  return (
    <div className="satoshi">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>No avaiable data</p>}

      <DataTable
        value={data}
        rows={10}
        tableStyle={{ minWidth: "83rem" }}
        scrollable
        className="payment_error"
        style={{ userSelect: "text", overflowX: "auto" }}
      >
        <Column field="id" header="ID" />
        <Column field="Мерчант" header="Мерчант" />
        <Column field="Имябанка" header="Имя банка" />
        <Column field="ГЕО" header="ГЕО" />
        <Column field="Сумма" header="Сумма" />
        <Column field="Oперации" header="Oперации" />
        <Column field="Текстошибки" header="Текст ошибки" />
        <Column field="Кодошибки" header="Код ошибки" />
        <Column field="Oшибки" header="Дата появления ошибки" />
      </DataTable>
    </div>
  );
};

export default PaymentErrorTable;
