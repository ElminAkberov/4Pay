import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { refillsList } from "../../../../features/refillisList/refillsListSlice";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const RefillsTable = () => {
  const [formData, setFormData] = useState({ page: 1 });
  const dispatch = useDispatch();
  const { data, loading, error, next, previous } = useSelector(
    (state) => state.refillsList
  );

  useEffect(() => {
    dispatch(refillsList(formData));
  }, [dispatch, formData]);

  const formattedData = data?.map((item) => ({
    id: item.id,
    Статус: item.status,
    Платеж: item.payment,
    Сумма: item.amount,
    Квитанция: item.receipt,
    "Дата создания": item.created_at
      ? new Date(item.created_at).toLocaleString()
      : "N/A",
    "Дата обновления": item.updated_at
      ? new Date(item.updated_at).toLocaleString()
      : "N/A",
  }));

  const renderTruncatedText = (value, maxLength = 10) => {
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

  const handleNextPage = () => {
    if (next) {
      setFormData({ page: formData.page + 1 });
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      setFormData({ page: formData.page - 1 });
    }
  };
  const StyledMenu = styled.div`
    flex: 1;
    overflow: hidden;
    justify-content: center;
    width: 100%;
    padding: 20px;
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #1a222c;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #1a222c;
    }
    * {
      scrollbar-width: thin;
      scrollbar-color: #1a222c #f1f1f1;
    }
  `;
  return (
    <>
      <menu className="flex overflow-hidden custom-table justify-center w-full max-[1200px]:px-10">
        <StyledMenu>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p style={{ color: "red" }}>Error: {error}</p>
          ) : (
            <>
              <DataTable
                rows={10}
                tableStyle={{ minHeight: "100vh" }}
                scrollable
                value={formattedData}
                style={{
                  userSelect: "text",
                  overflowX: "auto",
                  color: "white",
                }}
                className="refills_table"
              >
                <Column
                  field="id"
                  header="ID"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Статус"
                  header="Статус"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Платеж"
                  header="Платеж"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                  body={(rowData) => renderTruncatedText(rowData.Платеж)}
                />
                <Column
                  field="Сумма"
                  header="Сумма"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Квитанция"
                  header="Квитанция"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                  body={(rowData) => (
                    <NavLink to={rowData.Квитанция} target="_blank">
                      {renderTruncatedText(rowData.Квитанция)}
                    </NavLink>
                  )}
                />
                <Column
                  field="Дата создания"
                  header="Дата создания"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
                <Column
                  field="Дата обновления"
                  header="Дата обновления"
                  headerStyle={{
                    borderBottom: "1px solid #D4DAE2",
                    padding: "1rem",
                  }}
                  bodyStyle={{ textAlign: "center" }}
                />
              </DataTable>

              <div className="pagination text-white flex justify-center gap-x-2 ">
                <button
                  className="cursor-pointer"
                  onClick={handlePreviousPage}
                  disabled={!previous}
                >
                  <FaAngleLeft size={25} />
                </button>
                <span>{formData["page"]}</span>
                <button
                  className="cursor-pointer"
                  onClick={handleNextPage}
                  disabled={!next}
                >
                  <FaAngleRight size={25} />
                </button>
              </div>
            </>
          )}
        </StyledMenu>
      </menu>
    </>
  );
};

export default RefillsTable;
