import React from "react";
import styles from "../../ui/login/login.module.css";
import LoginForm from "../../ui/login/loginForm";
const page = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default page;
