import React from "react";
import styles from "../../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";
const addPage = async ({ params }) => {
  const { id } = await params;

  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src={user.img || "/avatar.png"}
            alt=""
            fill
            objectFit="contain"
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formDiv}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <div>
            <label>Username</label>
            <input type="text" name="username" placeholder={user.username} />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email} />
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label>Phone</label>
            <input type="phone" name="phone" value={user.phone} />
          </div>
          <div>
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter address"
              rows={5}
              value={user.address}
            ></textarea>
          </div>

          <div>
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true} selected={user.isAdmin}>
                Yes
              </option>
              <option value={false} selected={!user.isAdmin}>
                No
              </option>
            </select>
          </div>

          <div>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={user.isActive}>
                Yes
              </option>
              <option value={false} selected={!user.isActive}>
                No
              </option>
            </select>
          </div>

          <button className={styles.update}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default addPage;
