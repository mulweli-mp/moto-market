import React, { FC } from "react";
import styles from "./bikes-section.module.css";
import BikeItem from "@/components/bike-item";
import { Bike } from "@/components/types";

interface BikesSectionProps {
  filteredBikes: Bike[];
}

const BikesSection: FC<BikesSectionProps> = ({ filteredBikes }) => (
  <div className={styles.container}>
    {filteredBikes.map(({ BikeID, ...bike }) => (
      <BikeItem key={BikeID} bike={{ BikeID, ...bike }} />
    ))}
  </div>
);

export default BikesSection;
