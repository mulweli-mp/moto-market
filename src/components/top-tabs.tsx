import React, { FC, useState } from "react";
import styles from "./top-tabs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faFilter,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { SortConfig } from "./types";
import {
  sortOptionsArray,
  filterOptionsArray,
} from "@/utilities/modalArraysOptions";

interface Props {
  sortConfig: SortConfig;
  setSortConfig: ({ key, direction }: SortConfig) => void;
  setSearchQuery: (value: string) => void;
}

const TopTabs: FC<Props> = ({ sortConfig, setSortConfig, setSearchQuery }) => {
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showModeModal, setShowModeModal] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.sortContainer}
        onClick={() => setShowModeModal((prev) => !prev)}
      >
        <p> Mode: Shop</p>
        <FontAwesomeIcon
          icon={showModeModal ? faAngleUp : faAngleDown}
          className={styles.arrowIcon}
        />
      </div>
      <div
        className={styles.sortContainer}
        onClick={() => setShowFilterModal((prev) => !prev)}
      >
        <p>Filters</p>
        <FontAwesomeIcon icon={faFilter} className={styles.arrowIcon} />
      </div>
      <div
        className={styles.sortContainer}
        onClick={() => setShowSortModal((prev) => !prev)}
      >
        <p>Sort by: {sortConfig.key === "BikeID" ? "None" : sortConfig.key}</p>
        <FontAwesomeIcon
          icon={showSortModal ? faAngleUp : faAngleDown}
          className={styles.arrowIcon}
        />
      </div>
      {showSortModal && (
        <div
          className={`${styles.buttonContainer} ${styles.sortModalContainer} `}
        >
          {sortOptionsArray.map((item) => (
            <div
              key={item.key}
              className={styles.sortOption}
              onClick={() => {
                setSortConfig({ key: item.key, direction: item.direction });
                setShowSortModal(false);
              }}
            >
              <p>{item.option}</p>
            </div>
          ))}
        </div>
      )}
      {showFilterModal && (
        <div
          className={`${styles.buttonContainer} ${styles.filterModalContainer} `}
        >
          {filterOptionsArray.map((item) => (
            <div
              key={item.key}
              className={styles.sortOption}
              onClick={() => {
                setSearchQuery(item.key);
                setShowFilterModal(false);
              }}
            >
              <p>{item.option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default TopTabs;
