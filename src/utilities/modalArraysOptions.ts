import { SortOptionsArray } from "@/components/types";

export const sortOptionsArray: SortOptionsArray[] = [
  {
    id: "price-low-high",
    option: "Price: Low to High",
    key: "Price",
    direction: "ascending",
  },
  {
    id: "price-high-low",
    option: "Price: High to Low",
    key: "Price",
    direction: "descending",
  },

  {
    id: "year-new-old",
    option: "Year: New to Old",
    key: "Year",
    direction: "descending",
  },
  {
    id: "year-old-new",
    option: "Year: Old to New",
    key: "Year",
    direction: "ascending",
  },
  {
    id: "cc-low-high",
    option: "CC: Low to High",
    key: "Displacement",
    direction: "ascending",
  },
  {
    id: "cc-high-low",
    option: "CC: High to Low",
    key: "Displacement",
    direction: "descending",
  },
];

export const filterOptionsArray = [
  {
    key: "honda",
    option: "Honda",
  },
  {
    key: "yamaha",
    option: "Yamaha",
  },
  {
    key: "ktm",
    option: "KTM",
  },
  {
    key: "kawasaki ",
    option: "Kawasaki ",
  },
  {
    key: "suzuki",
    option: "Suzuki",
  },
  {
    key: "offroad",
    option: "Offroad",
  },
];
