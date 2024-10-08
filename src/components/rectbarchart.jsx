import React, { useState } from "react";
import Chart from "react-apexcharts";

const Rectbarchart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        color: "#2b7f75",
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        color: "#FFD66B",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          endingShape: "rounded",
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          colors: ["white"],
        },
        background: {
          enabled: true,
          foreColor: "black",
          fillColor: "white",
          borderRadius: 2,
          borderWidth: 1,
          borderColor: "white",
          padding: 5,
        },
        offsetY: 5,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
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
        show: false, // Disable built-in legend
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "15px",
          }}
        >
          {/* Custom Legend */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Net Profit Legend */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#2b7f75",
                  marginRight: "5px",
                  borderRadius: 50,
                }}
              ></div>
              <span>Today’s Booking</span>
            </div>

            {/* Free Cash Flow Legend */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#FFD66B",
                  marginRight: "5px",
                  borderRadius: 50,
                }}
              ></div>
              <span>Visitors</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            style={{
              padding: "8px 12px",
              backgroundColor: "#2b7f75",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Action
          </button>
        </div>
      </div>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="100%"
        height={370}
      />
    </div>
  );
};

export default Rectbarchart;
