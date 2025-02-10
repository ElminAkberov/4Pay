import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import "./paymentError.css";
import { paymentsErrorList } from "../../../../features/paymentList/paymentErrorListSlice";
import { Column } from "primereact/column";

const PaymentErrorTable = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.paymentList);

  useEffect(() => {
    dispatch(paymentsErrorList({}));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  const tableData = Array.isArray(data) ? data : [];

  return (
    <div className="satoshi">
      <DataTable
        value={tableData}
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
