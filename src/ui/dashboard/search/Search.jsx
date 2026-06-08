"use client";
import React from "react";
import styles from "./search.module.css";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const path = pathname.split("/").pop();
  const handlesearch = useDebouncedCallback((e) => {
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 500);
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch size={20} />
        <input
          type="text"
          placeholder={placeholder}
          className={styles.input}
          onChange={handlesearch}
        />
      </div>
      <Link href={`${path}/add`}>
        <button className={styles.button}>Add New</button>
      </Link>
    </div>
  );
};

export default Search;
