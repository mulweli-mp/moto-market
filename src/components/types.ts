export interface Bike {
  BikeID: number;
  Make: string;
  Model: string;
  Year: number;
  Displacement: number;
  Price: number;
  Terrain: string;
  Description: string;
}

export interface SortConfig {
  key: keyof Bike;
  direction: "ascending" | "descending";
}

export interface SortOptionsArray {
  id: string;
  option: string;
  key: keyof Bike;
  direction: "ascending" | "descending";
}
export interface BuyNowDataType {
  bikeName?: string;
  url?: string;
}
