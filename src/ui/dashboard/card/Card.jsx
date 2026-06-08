import React from "react";
import styles from "./Card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users </span>
        <span className={styles.price}>10.273 </span>
        <span className={styles.desc}>
          <span className={styles.positive}>12% </span>more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
