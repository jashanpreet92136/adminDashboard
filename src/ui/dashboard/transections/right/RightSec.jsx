"use client";

import React from "react";
import styles from "./revenueDonut.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Net Revenue", value: 82000, color: "#04b04b" },
  { name: "Refunds", value: 8000, color: "#b53109" },
  { name: "Fees", value: 3000, color: "#805c07" },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

const RevenueDonutChart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Total Revenue</h2>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              stroke="#2d3549"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER TEXT */}
        <div className={styles.center}>
          <h1 className={styles.amount}>${total.toLocaleString()}</h1>
          <p className={styles.label}>Total Revenue</p>
        </div>
      </div>

      {/* LEGEND */}
      <div className={styles.legend}>
        {data.map((item) => (
          <div key={item.name} className={styles.legendItem}>
            <span className={styles.dot} style={{ background: item.color }} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueDonutChart;
