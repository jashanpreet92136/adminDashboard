import React from "react";
import styles from "../../../ui/dashboard/revenue/revenue.module.css";

import SystemHealth from "../../../ui/dashboard/reports/SystemHealth";
import UserComplaints from "../../../ui/dashboard/reports/UserComplaints";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SystemHealth />
      </div>
      <div className={styles.bot}>
        <UserComplaints />
      </div>
    </div>
  );
};

export default page;
