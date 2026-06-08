import React from "react";
import styles from "../../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { fetchProduct } from "../../../lib/data";
import { updateProduct } from "../../../lib/actions";
const addPage = async ({ params }) => {
  const { id } = await params;

  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/product.png"
            alt=""
            fill
            objectFit="contain"
          />
        </div>
        {product.title}
      </div>
      <div className={styles.formDiv}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <div>
            <label>Title</label>
            <input type="text" name="title" placeholder={product.title} />
          </div>

          <div>
            <label>Price</label>
            <input type="number" name="price" placeholder={product.price} />
          </div>

          <div>
            <label>Stock</label>
            <input type="number" name="stock" placeholder={product.stock} />
          </div>

          <div>
            <label>Color</label>
            <input type="text" name="color" placeholder={product.color} />
          </div>

          <div>
            <label>Size</label>
            <input type="text" name="size" placeholder={product.size} />
          </div>

          <div>
            <label>Category</label>
            <select name="cat">
              <option value="general">{product.cat}</option>
              <option value="phones">Phones</option>
              <option value="computers">Computers</option>
              <option value="kitchen">Kitchen</option>
            </select>
          </div>

          <div>
            <label>Description</label>
            <textarea
              name="desc"
              rows={5}
              placeholder={product.desc}
            ></textarea>
          </div>

          <button type="submit" className={styles.update}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default addPage;
