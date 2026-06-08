"use client";
import React from "react";
import styles from "../../../../ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "../../../lib/actions";
const addPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="username"
          placeholder="username"
          name="username"
          required
        />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" required />

        <select name="isAdmin" id="isAdmin">
          <option value="general">isAdmin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value="general">isActive?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows={15}
          placeholder="address"
        ></textarea>

        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default addPage;
