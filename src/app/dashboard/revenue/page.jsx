import React from "react";
import styles from "../../../ui/dashboard/revenue/revenue.module.css";
import RevenueLineChart from "../../../ui/dashboard/revenue/LineChart";
import RevenueBarChart from "../../../ui/dashboard/revenue/BarChart";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <RevenueLineChart />
      </div>
      <div className={styles.bot}>
        <RevenueBarChart />
      </div>
    </div>
  );
};

export default page;
