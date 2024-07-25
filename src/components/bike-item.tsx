import React from "react";
import styles from "./bike-item.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faRoad,
  faCalendarAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

type Bike = {
  BikeID: number;
  Make: string;
  Model: string;
  Year: number;
  Displacement: number;
  Price: number;
  Terrain: string;
  Description: string;
};

interface Props {
  bike: Bike;
}

const BikeItem: React.FC<Props> = ({ bike }) => {
  const {
    BikeID,
    Make,
    Model,
    Year,
    Displacement,
    Price,
    Terrain,
    Description,
  } = bike;

  const imageUrl = `https://firebasestorage.googleapis.com/v0/b/primebet-24.appspot.com/o/MotoMarket%2F${BikeID}.png?alt=media&token=8332898a-92fa-431f-9e16-75a20fefea3b`;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          width={150}
          height={150}
          alt={`${Make} ${Model}`}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <p>{Description}</p>
        <div className={styles.tooltip}>{Description}</div>
      </div>
      <div className={styles.specsContainer}>
        <div className={styles.specItem}>
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.specsIcon} />
          <p>{Year}</p>
        </div>
        <div className={styles.specItem}>
          <FontAwesomeIcon icon={faMotorcycle} className={styles.specsIcon} />
          <p>{Displacement}cc</p>
        </div>
        <div className={styles.specItem}>
          <FontAwesomeIcon icon={faRoad} className={styles.specsIcon} />
          <p>{Terrain}</p>
        </div>
      </div>
      <div className={styles.identityContainer}>
        <p>
          {Make} {Model}
        </p>
        <p className={styles.priceText}>R{Price}</p>
      </div>
      <div className={styles.cartContainer}>
        <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
        <p className={styles.cartText}>Add To Cart</p>
      </div>
    </div>
  );
};

export default React.memo(BikeItem);
