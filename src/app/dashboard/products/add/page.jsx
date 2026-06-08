import React from "react";
import styles from "../../../../ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "../../../lib/actions";
const addPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value={false}>Choose a category</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Phone">Phone</option>
          <option value="Compuer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" required />
        <input type="text" placeholder="size" name="size" required />
        <textarea
          name="desc"
          id="desc"
          rows={15}
          placeholder="description"
          required
        ></textarea>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default addPage;
