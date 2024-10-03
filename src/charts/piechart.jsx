import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data02 = [
  { name: "Neurology", value: 100 },
  { name: "Dental Care", value: 300 },
  { name: "Gynecology", value: 100 },
  { name: "Orthopedic", value: 80 },
];

const COLORS = ["#2B7F75", "#FFD66B", "#176B87", "#64CCC5"];
const HOVER_COLORS = ["#1F6B62", "#FFD55B", "#125A70", "#52B7B0"];

export default function SecondPieChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div style={{ width: "100%", height: 380, position: "relative" }}>
      {/* Header and button container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "left", margin: 0 }}>
          Appointment by Patients
        </h1>
        <button
          style={{
            padding: "8px 12px",
            backgroundColor: "#2b7f75", // User's preferred color
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Action
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        {/* Pie Chart */}
        <ResponsiveContainer width="60%" height={380}>
          <PieChart>
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={
                activeIndex !== null
                  ? (index) => (index === activeIndex ? 100 : 90)
                  : 90
              } // Change radius based on active index
              fill="#82ca9d"
              paddingAngle={5}
              cornerRadius={10}
            >
              {data02.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    activeIndex === index
                      ? HOVER_COLORS[index % HOVER_COLORS.length]
                      : COLORS[index % COLORS.length]
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div style={{ marginLeft: "20px", width: "30%" }}>
          <div className="flex justify-between flex-col">
            <div>visitors</div>
            <span style={{ margin: 0, fontSize: "30px", color: "#333" }}>
              10,587
            </span>
          </div>

          {data02.map((entry, index) => (
            <div
              key={`legend-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                cursor: "pointer",
                fontWeight: activeIndex === index ? "bold" : "normal",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Color box */}
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: COLORS[index % COLORS.length],
                  marginRight: "10px",
                }}
              ></div>

              {/* Name */}
              <span style={{ marginRight: "10px" }}>{entry.name}</span>

              {/* Value in rounded square */}
              <div
                style={{
                  width: "40px",
                  height: "20px",
                  backgroundColor: COLORS[index % COLORS.length],
                  borderRadius: "8px", // Rounded corners
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {entry.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
