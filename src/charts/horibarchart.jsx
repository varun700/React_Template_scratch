import React, { useState } from "react";
import Chart from "react-apexcharts";

const Horibarchart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          { x: "Feb", y: 400, fillColor: "#2B7F75" },
          { x: "Mar", y: 430, fillColor: "#FFD66B" },
          { x: "Apr", y: 448, fillColor: "#176B87" },
          { x: "May", y: 470, fillColor: "#775DD0" },
          { x: "Jun", y: 540, fillColor: "#64CCC5" },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 200,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "15%",
          borderRadius: 10,
          endingShape: "rounded",
          dataLabels: {
            position: "top", // Set data label position to top
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          colors: ["white"],
        },
        background: {
          enabled: true,
          foreColor: "black",
          fillColor: "white",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "white",
          padding: 5,
        },
        offsetY: 0,
        offsetX: -20,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun"],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  });

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h3 style={{ margin: 0 }}>Appointment by Department</h3>
          <span style={{ margin: 0, fontSize: "30px", color: "#333" }}>
            73,504
          </span>
        </div>

        <button
          style={{
            padding: "8px 12px",
            backgroundColor: "#2b7f75",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBlockEnd: "auto",
          }}
        >
          Action
        </button>
      </div>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="100%"
        height={285}
      />
    </div>
  );
};

export default Horibarchart;
