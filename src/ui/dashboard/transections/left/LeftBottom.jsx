import React from "react";
import styles from "./left.module.css";
import { fetchTrans } from "../../../../app/lib/data";
import { timeAgo } from "../../../../app/lib/timeago";

const LeftBottom = async () => {
  const transactions = await fetchTrans();

  return (
    <div className={styles.container}>
      {transactions.map((transaction) => (
        <div key={transaction._id} className={styles.card}>
          {/* TOP */}
          <div className={styles.top}>
            <h3 className={styles.name}>{transaction.name}</h3>

            <span className={`${styles.status} ${styles[transaction.status]}`}>
              {transaction.status}
            </span>
          </div>

          {/* MIDDLE */}
          <div className={styles.middle}>
            <p className={styles.amount}>${transaction.amount}</p>
            <p className={styles.method}>{transaction.method}</p>
          </div>

          {/* BOTTOM */}
          <div className={styles.bottom}>
            <span>{timeAgo(transaction.createdAt)}</span>
            <span>ID: {transaction.transactionId}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftBottom;
