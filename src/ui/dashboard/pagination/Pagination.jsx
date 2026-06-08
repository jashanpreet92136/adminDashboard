"use client";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const ITEM_PER_PAGE = 6;
  const page = parseInt(searchParams.get("page") || 1);
  const safeCount = Number(count || 0);
  const hasPrev = page > 1;
  const hasNext = page * ITEM_PER_PAGE < safeCount;

  const handlePageChange = (type) => {
    const params = new URLSearchParams(searchParams);

    if (type === "prev") {
      params.set("page", page - 1);
    } else {
      params.set("page", page + 1);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={() => handlePageChange("prev")}
      >
        Previous
      </button>

      <button
        type="button"
        disabled={!hasNext}
        className={styles.button}
        onClick={() => handlePageChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
