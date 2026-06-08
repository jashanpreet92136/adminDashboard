"use client";

import React from "react";
import styles from "../../../ui/dashboard/teams/team.module.css";

import Image from "next/image";

const TeamsPage = () => {
  const team = [
    { name: "Jashan", role: "Owner" },
    { name: "Navi", role: "Admin" },
    { name: "Simran", role: "Admin" },
    { name: "Karan", role: "Support" },
    { name: "Mehak", role: "Support" },
    { name: "Aman", role: "Developer" },
    { name: "Ravi", role: "Designer" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meet the Team</h2>
      <p className={styles.subtitle}>People behind the system</p>

      <div className={styles.grid}>
        {team.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.circle}>
              <Image
                src="/avatar.png"
                alt={member.name}
                width={110}
                height={110}
                className={styles.img}
              />
            </div>

            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
