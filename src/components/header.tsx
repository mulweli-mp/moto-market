import React, { FC, ChangeEvent, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useWindowWidth from "@/hooks/useWindowsWidth";

interface HeaderProps {
  searchQuery: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Header: FC<HeaderProps> = ({ searchQuery, handleSearch }) => {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.headerContainer}>
      <Image src="/logo.png" width={80} height={80} alt="motor-market logo" />
      {windowWidth >= 700 && <p className={styles.brandName}>MotoMarket</p>}

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search MotoMarket"
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className={styles.searchIconContainer}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>
      </div>
      <div
        onClick={() => alert("Coming soon, or is it?")}
        className={styles.cartContainer}
      >
        <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
        <p>0</p>
      </div>
    </div>
  );
};

export default Header;
