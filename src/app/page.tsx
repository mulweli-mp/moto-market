"use client";
import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import styles from "./page.module.css";
import Header from "@/components/header";
import BikesSection from "@/components/bikes-section";
import TopTabs from "@/components/top-tabs";
import TableSection from "@/components/table-section";
import { Bike, SortConfig } from "@/components/types";
import { fetchBikesData } from "@/utilities/fetchBikesData";

export default function Home() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "BikeID",
    direction: "ascending",
  });
  const [websiteMode, setWebsiteMode] = useState<"shop" | "table">("shop");

  useEffect(() => {
    const loadData = async () => {
      try {
        const bikesData = await fetchBikesData();
        setBikes(bikesData);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (key: keyof Bike) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedBikes = useMemo(() => {
    return [...bikes].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [bikes, sortConfig]);

  const filteredBikes = useMemo(() => {
    return sortedBikes.filter((bike) => {
      return (
        bike.Make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.Model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.Year.toString().includes(searchQuery) ||
        bike.Terrain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.Description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery, sortedBikes]);

  return (
    <main className={styles.main}>
      <Header searchQuery={searchQuery} handleSearch={handleSearch} />
      <TopTabs
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        setSearchQuery={setSearchQuery}
        websiteMode={websiteMode}
        setWebsiteMode={setWebsiteMode}
      />
      {websiteMode === "shop" ? (
        <BikesSection filteredBikes={filteredBikes} />
      ) : (
        <TableSection filteredBikes={filteredBikes} handleSort={handleSort} />
      )}
    </main>
  );
}
