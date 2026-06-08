"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { category: "Phones", revenue: 45000 },
  { category: "Computers", revenue: 32000 },
  { category: "Kitchen", revenue: 18000 },
];

const RevenueBarChart = () => {
  return (
    <div
      style={{
        width: "95%",
        height: 320,
        background: "#1c2434",
        padding: "25px",

        borderRadius: "12px",
      }}
    >
      <h3 style={{ color: "white", marginBottom: "10px" }}>
        Revenue by Category
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#ffb300" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueBarChart;
