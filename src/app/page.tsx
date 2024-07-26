"use client";
import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import styles from "./page.module.css";
import Header from "@/components/header";
import BikesSection from "@/components/bikes-section";
import TopTabs from "@/components/top-tabs";
import TableSection from "@/components/table-section";
import Footer from "@/components/footer";

import { Bike, SortConfig, BuyNowDataType } from "@/components/types";
import { fetchBikesData } from "@/utilities/fetchBikesData";
import ViewCartModal from "@/components/view-cart-modal";

export default function Home() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "BikeID",
    direction: "ascending",
  });
  const [websiteMode, setWebsiteMode] = useState<"shop" | "table">("shop");
  const [buyNowData, setBuyNowData] = useState<null | BuyNowDataType>(null);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const onPressBuyNow = (data: BuyNowDataType | null) => {
    setBuyNowData(data);
    scrollToTop();
  };

  const onCancelBuyNow = () => {
    setBuyNowData(null);
  };

  return (
    <main className={styles.main}>
      <Header searchQuery={searchQuery} handleSearch={handleSearch} />
      {buyNowData && (
        <ViewCartModal
          buyNowData={buyNowData}
          onCancelBuyNow={onCancelBuyNow}
        />
      )}
      <TopTabs
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        setSearchQuery={setSearchQuery}
        websiteMode={websiteMode}
        setWebsiteMode={setWebsiteMode}
        onCancelBuyNow={onCancelBuyNow}
      />
      {websiteMode === "shop" ? (
        <BikesSection
          filteredBikes={filteredBikes}
          onPressBuyNow={onPressBuyNow}
        />
      ) : (
        <TableSection filteredBikes={filteredBikes} handleSort={handleSort} />
      )}

      <Footer />
    </main>
  );
}
