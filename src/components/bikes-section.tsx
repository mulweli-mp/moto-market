import React, { FC } from "react";
import styles from "./bikes-section.module.css";
import BikeItem from "@/components/bike-item";
import { Bike, BuyNowDataType } from "@/components/types";

interface BikesSectionProps {
  filteredBikes: Bike[];
  onPressBuyNow: (data: BuyNowDataType) => void;
}

const BikesSection: FC<BikesSectionProps> = ({
  filteredBikes,
  onPressBuyNow,
}) => (
  <div className={styles.container}>
    {filteredBikes.map(({ BikeID, ...bike }) => (
      <BikeItem
        key={BikeID}
        bike={{ BikeID, ...bike }}
        onPressBuyNow={onPressBuyNow}
      />
    ))}
  </div>
);

export default BikesSection;
