import React from "react";
import styles from "../../../ui/dashboard/transections/transections.module.css";
import Chart from "../../../ui/dashboard/transections/Tchart";
import RevenueDonutChart from "../../../ui/dashboard/transections/right/RightSec";
import LeftBottom from "../../../ui/dashboard/transections/left/LeftBottom";
const page = () => {
  return (
    <div className={styles.box}>
      <div className={styles.leftSec}>
        <div className={styles.tchart}>
          <Chart />
        </div>
        <div className={styles.tcard}>
          <LeftBottom />
        </div>
      </div>

      <div className={styles.rightSec}>
        <div className={styles.topSec}>
          <RevenueDonutChart />
        </div>
      </div>
    </div>
  );
};

export default page;
