"use client";
import React from "react";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      {/* left side */}
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      {/* right side */}
      <div className={styles.menu}>
        {/* menu and search bae */}
        <div className={styles.search}>
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search...."
            className={styles.input}
          />
        </div>
        {/* icons on right */}
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
