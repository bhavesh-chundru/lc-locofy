import { FunctionComponent } from "react";
import styles from "./OfferAndDeals.module.css";

const OfferAndDeals: FunctionComponent = () => {
  return (
    <section className={styles.frameSection}>
      <div className={styles.frameDiv}>
        <div className={styles.offersDeals}>{`Offers & Deals`}</div>
      </div>
      <div className={styles.arrowsDiv}>
        <div className={styles.leftArrowDiv}>
          <img
            className={styles.iconsArrowLeft2Line}
            alt=""
            src="../iconsarrow-left-2line.svg"
          />
        </div>
        <div className={styles.rightArrowDiv}>
          <img
            className={styles.iconsArrowLeft2Line}
            alt=""
            src="../iconsarrow-right-2line.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferAndDeals;
