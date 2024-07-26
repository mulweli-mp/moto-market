import React, { FC } from "react";
import styles from "./view-cart-modal.module.css";
import Image from "next/image";
import { BuyNowDataType } from "@/components/types";

interface ViewCartProps {
  buyNowData: BuyNowDataType;
  onCancelBuyNow: () => void;
}

const ChecoutButton = () => (
  <div
    onClick={() => alert("Feature coming soon")}
    className={styles.checkOutButton}
  >
    <div className={styles.buttonMiddleLayer}>
      <div className={styles.buttonInnerLayer}>CHECKOUT</div>
    </div>
  </div>
);

const ViewCartModal: FC<ViewCartProps> = ({ buyNowData, onCancelBuyNow }) => {
  return (
    <div className={styles.container}>
      <div onClick={onCancelBuyNow} className={styles.closeButton}>
        X
      </div>
      <h1>{buyNowData.bikeName}</h1>

      <Image
        src={buyNowData.url ? buyNowData.url : ""}
        width={300}
        height={300}
        alt={`${buyNowData.bikeName}  image`}
      />
      <ChecoutButton />
    </div>
  );
};

export default ViewCartModal;
