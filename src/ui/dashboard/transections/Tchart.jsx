"use client";

import React from "react";
import styles from "./chart.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", success: 12000, pending: 3000, failed: 1000 },
  { name: "Feb", success: 15000, pending: 2000, failed: 800 },
  { name: "Mar", success: 18000, pending: 4000, failed: 1200 },
  { name: "Apr", success: 14000, pending: 2500, failed: 900 },
  { name: "May", success: 22000, pending: 3500, failed: 1100 },
  { name: "Jun", success: 26000, pending: 4200, failed: 1500 },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Transaction Overview</h2>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip contentStyle={{ background: "#404d6b", border: "none" }} />
          <Legend />

          {/* STACKED AREAS */}
          <Area
            type="monotone"
            dataKey="failed"
            stackId="1"
            stroke="#FF3D00"
            fill="#f75b2b"
          />
          <Area
            type="monotone"
            dataKey="pending"
            stackId="1"
            stroke="#FFB300"
            fill="#f5ba2f"
          />
          <Area
            type="monotone"
            dataKey="success"
            stackId="1"
            stroke="#00C853"
            fill="#06dd60"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
