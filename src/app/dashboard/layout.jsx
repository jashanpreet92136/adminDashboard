import Navbar from "../../ui/dashboard/navbar/Navbar";
import Sidebar from "../../ui/dashboard/sidebar/Sidebar";
import React from "react";
import styles from "../../ui/dashboard/dashboard.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.menu}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
