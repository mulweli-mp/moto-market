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
import { Bike, BuyNowDataType } from "@/components/types";

interface Props {
  bike: Bike;
  onPressBuyNow: (data: BuyNowDataType) => void;
}

const BikeItem: React.FC<Props> = React.memo(({ bike, onPressBuyNow }) => {
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

  const imageUrl = `/${BikeID}.png`;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          width={150}
          height={150}
          alt={`${Make} ${Model} image`}
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
      <div
        onClick={() =>
          onPressBuyNow({
            bikeName: `${Make} ${Model}`,
            url: imageUrl,
          })
        }
        className={styles.cartContainer}
      >
        <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
        <p className={styles.cartText}>Buy Now</p>
      </div>
    </div>
  );
});

export default BikeItem;
