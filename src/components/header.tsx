import styles from "./header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          className={styles.logoStyle}
          alt="motor-market logo"
        />
        <p className={styles.brandName}>MotoMarket</p>

        <div className={styles.searchBox}>
          <p>Search MotoMarket</p>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>
        <div className={styles.cartContainer}>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.sortContainer}>
        <p>Sort by: Price</p>
        <FontAwesomeIcon icon={faAngleDown} className={styles.arrowIcon} />
      </div>
    </div>
  );
}
