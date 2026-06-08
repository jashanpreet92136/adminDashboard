import Pagination from "../../../ui/dashboard/pagination/Pagination";
import Search from "../../../ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../../ui/dashboard/products/products.module.css";
import { fetchProducts } from "../../lib/data";
import { deleteProduct } from "../../lib/actions";
const ProductPage = async ({ searchParams }) => {
  const params = await searchParams;

  const q = params?.q || "";
  const page = params?.page || 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <Search placeholder={"search for a propduct..."} />
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={product.img || "/product.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.img}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.link}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.view} ${styles.button}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input
                      type="hidden"
                      name="id"
                      value={product._id.toString()}
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

export default ProductPage;
