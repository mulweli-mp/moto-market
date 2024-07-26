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
  websiteMode: "shop" | "table";
  setWebsiteMode: (value: "shop" | "table") => void;
}

const TopTabs: FC<Props> = ({
  sortConfig,
  setSortConfig,
  setSearchQuery,
  websiteMode,
  setWebsiteMode,
}) => {
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showModeModal, setShowModeModal] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.tapButtonContainer}
        onClick={() => {
          setShowModeModal((prev) => !prev);
          setShowSortModal(false);
          setShowFilterModal(false);
        }}
      >
        <p className={styles.buttonTextStyle}> Mode: {websiteMode}</p>
        <FontAwesomeIcon
          icon={showModeModal ? faAngleUp : faAngleDown}
          className={styles.buttonIcontyle}
        />
      </div>
      <div
        className={styles.tapButtonContainer}
        onClick={() => {
          setShowFilterModal((prev) => !prev);
          setShowModeModal(false);
          setShowSortModal(false);
        }}
      >
        <p className={styles.buttonTextStyle}>Filters</p>
        <FontAwesomeIcon icon={faFilter} className={styles.buttonIcontyle} />
      </div>
      <div
        className={styles.tapButtonContainer}
        onClick={() => {
          setShowSortModal((prev) => !prev);

          setShowModeModal(false);
          setShowFilterModal(false);
        }}
      >
        <p className={styles.buttonTextStyle}>
          Sort by: {sortConfig.key === "BikeID" ? "None" : sortConfig.key}
        </p>
        <FontAwesomeIcon
          icon={showSortModal ? faAngleUp : faAngleDown}
          className={styles.buttonIcontyle}
        />
      </div>
      {showModeModal && (
        <div
          className={`${styles.buttonContainer} ${styles.tableModalContainer} `}
        >
          <div
            className={styles.sortOption}
            onClick={() => {
              setWebsiteMode("shop");
              setShowModeModal(false);
            }}
          >
            <p>Shop</p>
          </div>
          <div
            className={styles.sortOption}
            onClick={() => {
              setWebsiteMode("table");
              setShowModeModal(false);
            }}
          >
            <p>Table</p>
          </div>
        </div>
      )}
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
