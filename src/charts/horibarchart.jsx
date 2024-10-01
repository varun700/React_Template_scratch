import React, { Component } from "react";
import Chart from "react-apexcharts";

class Horibarchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        // title: {
        //   text: "Appointment by Department", // Title text
        //   align: "left", // Align title to the left
        //   style: {
        //     fontSize: "16px", // Title font size
        //     fontWeight: "bold", // Title font weight
        //     color: "#333", // Title color
        //   },
        // },
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
            // Return value as a string
            return val; // Display the value as is
          },
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            colors: ["black"], // Text color
          },
          background: {
            enabled: true,
            borderRadius: 5,
            borderColor: "white",
            borderWidth: 1,
            padding: 5,
            color: "#fff",
          },
          offsetY: 1,
          offsetX: -17,
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
    };
  }

  render() {
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
            {/* Chart Title */}
            <span style={{ margin: 0, fontSize: "30px", color: "#333" }}>
              73,504 {/* Subtitle or number */}
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
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
          height={285}
          // Use percentage for responsiveness
        />
      </div>
    );
  }
}

export default Horibarchart;
