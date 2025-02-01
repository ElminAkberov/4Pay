import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
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
  const time = {
    payments_by_hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Payment data
    timeline_hours: [
      "2025-02-01T14:34:23.968Z",
      "2025-02-01T13:34:23.968Z",
      "2025-02-01T12:34:23.968Z",
      "2025-02-01T11:34:23.968Z",
      "2025-02-01T10:34:23.968Z",
      "2025-02-01T09:34:23.968Z",
      "2025-02-01T08:34:23.968Z",
      "2025-02-01T07:34:23.968Z",
      "2025-02-01T06:34:23.968Z",
      "2025-02-01T05:34:23.968Z",
      "2025-02-01T04:34:23.968Z",
      "2025-02-01T03:34:23.968Z",
      "2025-02-01T02:34:23.968Z",
      "2025-02-01T01:34:23.968Z",
      "2025-02-01T00:34:23.968Z",
      "2025-01-31T23:34:23.968Z",
      "2025-01-31T22:34:23.968Z",
      "2025-01-31T21:34:23.968Z",
      "2025-01-31T20:34:23.968Z",
      "2025-01-31T19:34:23.968Z",
      "2025-01-31T18:34:23.968Z",
      "2025-01-31T17:34:23.968Z",
      "2025-01-31T16:34:23.968Z",
      "2025-01-31T15:34:23.968Z",
    ],
  };

  const extendedPayments = [...time.payments_by_hours];
  while (extendedPayments.length < time.timeline_hours.length) {
    extendedPayments.push(0);
  }

  const formattedHours = time.timeline_hours.map((timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    if (hours === 0) {
      return `${date.getDate()} ${months[date.getMonth()]}`;
    } else {
      return `${hours}:${minutes}`;
    }
  });

  const [state, setState] = React.useState({
    series: [
      {
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
        colors:"#3DC375",
        width:2
      },
      markers: {
        size: 4, 
        colors: ['#3DC375'], 
        strokeColor: '#3DC375', 
        strokeWidth: 2, 
      },
      grid: {
        row: {
          colors: ["#fff"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: formattedHours,
        labels: {
          rotate: -45,
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 5,
        tickAmount: 5,
      },
      tooltip: {
        x: {
          formatter: function (_, { dataPointIndex }) {
            const timestamp = time.timeline_hours[dataPointIndex];
            const date = new Date(timestamp);

            const hours = date.getHours();
            const minutes = date.getMinutes().toString().padStart(2, "0");

            return `${date.getDate()}/${
              date.getMonth() <= 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1
            }/${date.getFullYear()} ${hours}:${minutes}`;
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexChart;
