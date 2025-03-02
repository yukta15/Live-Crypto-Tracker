import React from "react";
import styles from "./searchbar.module.css";

export default function SearchBar({ searchQuery = "", onSearchChange }) {
  return (
    <div className={styles.searchbar_box}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="Search for a coin..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
