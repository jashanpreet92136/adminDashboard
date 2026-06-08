import React from "react";
import styles from "./transections.module.css";
import { fetchTrans } from "../../../app/lib/data";
import { timeAgo } from "../../../app/lib/timeago";

const Transections = async () => {
  const transactions = await fetchTrans();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Time</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          {transactions.slice(0, 4).map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.name}</td>

              <td>
                <span
                  className={`${styles.status} ${styles[transaction.status]}`}
                >
                  {transaction.status}
                </span>
              </td>

              <td>{timeAgo(transaction.createdAt)}</td>

              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transections;
