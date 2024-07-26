import React, { FC } from "react";
import styles from "./table-section.module.css";
import { Bike } from "@/components/types";

interface TableSectionProps {
  filteredBikes: Bike[];
  handleSort: (value: keyof Bike) => void;
}

const TableSection: FC<TableSectionProps> = ({ filteredBikes, handleSort }) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead>
        <tr>
          {[
            "BikeID",
            "Make",
            "Model",
            "Year",
            "Displacement",
            "Price",
            "Terrain",
          ].map((header) => (
            <th
              key={header}
              onClick={() => handleSort(header as keyof Bike)}
              aria-label={`Sort by ${header}`}
            >
              {header}
            </th>
          ))}
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {filteredBikes.map(
          ({
            BikeID,
            Make,
            Model,
            Year,
            Displacement,
            Price,
            Terrain,
            Description,
          }) => (
            <tr key={BikeID}>
              <td data-label="BikeID">{BikeID}</td>
              <td data-label="Make">{Make}</td>
              <td data-label="Model">{Model}</td>
              <td data-label="Year">{Year}</td>
              <td data-label="Displacement">{Displacement}</td>
              <td data-label="Price">{Price}</td>
              <td data-label="Terrain">{Terrain}</td>
              <td data-label="Description">{Description}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);

export default TableSection;
