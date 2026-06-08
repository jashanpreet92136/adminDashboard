"use client";

import React from "react";

const SystemHealth = () => {
  const data = [
    { label: "Server Status", value: "Online", status: "good" },
    { label: "Database", value: "Stable", status: "good" },
    { label: "API Success Rate", value: "98.4%", status: "good" },
    { label: "Error Rate", value: "1.6%", status: "warning" },
    { label: "Response Time", value: "220ms", status: "good" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>System Health</h2>

      <div style={styles.grid}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              borderLeft: `4px solid ${
                item.status === "good"
                  ? "#00c853"
                  : item.status === "warning"
                    ? "#ffb300"
                    : "#ff3d00"
              }`,
            }}
          >
            <p style={styles.label}>{item.label}</p>
            <p style={styles.value}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#1c2434",
    padding: "16px",
    borderRadius: "12px",
    color: "white",
  },
  title: {
    marginBottom: "12px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
  },
  card: {
    background: "#151c2c",
    padding: "12px",
    borderRadius: "10px",
  },
  label: {
    fontSize: "12px",
    opacity: 0.7,
  },
  value: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default SystemHealth;
