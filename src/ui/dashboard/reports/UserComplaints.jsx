"use client";

import React from "react";

const UserComplaints = () => {
  const complaints = [
    { issue: "Login issues", count: 12 },
    { issue: "Payment failure", count: 8 },
    { issue: "Slow performance", count: 5 },
    { issue: "UI confusion", count: 3 },
    { issue: "Account help", count: 2 },
  ];

  const getColor = (count) => {
    if (count >= 9) return "#ff3d00"; // red
    if (count >= 4) return "#ffb300"; // yellow
    return "#00c853"; // green
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Complaints</h2>

      <div style={styles.list}>
        {complaints.map((item, index) => (
          <div key={index} style={styles.row}>
            <span>{item.issue}</span>

            <span
              style={{
                ...styles.count,
                color: getColor(item.count),
              }}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    background: "#1c2434",
    padding: "16px",
    borderRadius: "12px",
    color: "white",
    marginTop: "16px",
  },
  title: {
    marginBottom: "12px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    background: "#151c2c",
    padding: "20px",
    borderRadius: "8px",
  },
  count: {
    fontWeight: "bold",
    color: "#ffb300",
  },
};

export default UserComplaints;
