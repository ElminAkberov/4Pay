import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardThunk } from "../../../features/dashboard/dashboardSlice";
import ReactApexChart from "react-apexcharts";

const Charts = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardThunk(formData));
  }, []);

  const { data, loading } = useSelector((state) => state.dashboard);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const paymentsByDays = data?.chart?.payments_by_days || [];
  const timelineDays = data?.chart?.timeline_days || [];



  const extendedPayments = [...paymentsByDays];
  while (extendedPayments.length < timelineDays.length) {
    extendedPayments.push(0);
  }

  const formattedDays = timelineDays.map((dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${months[date.getMonth()]}`;
  });

  const [state, setState] = React.useState({
    series: [
      {
        name: "Payments",
        data: extendedPayments,
      },
    ],
    options: {
      chart: {
        height: 600,
        type: "line",
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: true,
        },
        toolbar: {
          show: true,
          tools: {
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: "#3DC375",
        width: 2,
      },
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColor: "#3DC375",
        strokeWidth: 2,
      },
      grid: {
        row: {
          colors: ["#1C2434", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: formattedDays,
        labels: {
          rotate: -45,
          style: { colors: "#fff", fontSize: "12px" },
        },
      },
      yaxis: {
        min: 0,
        max: Math.max(...extendedPayments) + 1,
        tickAmount: 5,
        labels: {
          style: { colors: "#ffffff", fontSize: "12px" },
        },
      },
      tooltip: {
        x: {
          formatter: function (_, { dataPointIndex }) {
            const dateString = timelineDays[dataPointIndex];
            const date = new Date(dateString);
            return `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`;
          },
        },
      },
    },
  });

  const currency = data?.currency || [];
  const balance = data?.balance || {};

  const formatCurrencyData = (value) => {
    return value === null || value === undefined ? "" : value;
  };

  return (
    <div style={{ padding: "20px" }}>
      <div id="chart">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            height={350}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Общее количество заказов  */}
        <div
          style={{
            backgroundColor: "#1C2434",
            padding: "15px",
            borderRadius: "8px",
            flex: 1,
          }}
        >
          <h4 style={{ color: "#fff" }}>Общее количество заказов</h4>
          <div style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
            {formatCurrencyData(
              data?.currency?.reduce((sum, item) => sum + item.total_count, 0)
            )}
          </div>
        </div>

        {/* Завершенные заказы  */}
        <div
          style={{
            backgroundColor: "#1C2434",
            padding: "15px",
            borderRadius: "8px",
            flex: 1,
          }}
        >
          <h4 style={{ color: "#fff" }}>Завершенные заказы</h4>
          <div style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
            {formatCurrencyData(
              data?.currency?.reduce(
                (sum, item) => sum + item.completed_count,
                0
              )
            )}
          </div>
        </div>

        {/* Общая сумма заказов  */}
        <div
          style={{
            backgroundColor: "#1C2434",
            padding: "15px",
            borderRadius: "8px",
            flex: 1,
          }}
        >
          <h4 style={{ color: "#fff" }}>Общая сумма заказов</h4>
          <div style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
            {formatCurrencyData(
              data?.currency?.reduce((sum, item) => sum + item.total_amount, 0)
            )}
          </div>
        </div>

        {/* Конверсия */}
        <div
          style={{
            backgroundColor: "#1C2434",
            padding: "15px",
            borderRadius: "8px",
            flex: 1,
          }}
        >
          <h4 style={{ color: "#fff" }}>Конверсия</h4>
          <div style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
            {formatCurrencyData(
              data?.currency?.reduce((sum, item) => sum + item.conversion, 0)
            )}
          </div>
        </div>

        {/* Баланс */}
        <div
          style={{
            backgroundColor: "#1C2434",
            padding: "15px",
            borderRadius: "8px",
            flex: "1",
          }}
        >
          <h4 style={{ color: "#fff" }}>Баланс</h4>
          <div style={{ color: "#fff" }}>
            {Object.keys(balance).map((key) => (
              <div
                key={key}
                style={{
                  marginBottom: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <strong>{key}</strong>: {balance[key].balance}{" "}
                {balance[key].symbol}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
