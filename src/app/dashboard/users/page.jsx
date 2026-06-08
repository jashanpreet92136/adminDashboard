import React from "react";
import styles from "../../../ui/dashboard/users/users.module.css";
import Search from "../../../ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../../ui/dashboard/pagination/Pagination";
import { fetchUsers } from "../../lib/data";
import { deleteUser } from "../../lib/actions";

const UsersPage = async ({ searchParams }) => {
  const params = await searchParams;

  const q = params?.q || "";
  const page = params?.page || 1;
  const { count, users } = await fetchUsers(q, page);
  return (
    <div className={styles.container}>
      <Search placeholder={"search for a user..."} />
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/avatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.img}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>
                <div className={styles.link}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.view} ${styles.button}`}>
                      View
                    </button>
                  </Link>

                  <form action={deleteUser}>
                    <input
                      type="hidden"
                      name="id"
                      value={user._id.toString()}
                    />
                    <button className={`${styles.delete} ${styles.button}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
