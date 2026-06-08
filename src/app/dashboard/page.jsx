import React from "react";
import styles from "../../ui/dashboard/dashboard.module.css";

import Chart from "../../ui/dashboard/chart/Chart";
import Transections from "../../ui/dashboard/transections/Transections.jsx";
import Rightbar from "../../ui/dashboard/rightbar/Rightbar";
import Card from "../../ui/dashboard/card/Card.jsx";

const page = () => {
  return (
    <div className={styles.wrapper}>
      {/* left */}
      <div className={styles.left}>
        {/* card */}
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transections />
        <Chart />
        {/* right  */}
      </div>
      <div className={styles.right}>
        <Rightbar />
      </div>
    </div>
  );
};

export default page;
