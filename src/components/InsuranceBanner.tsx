import { FunctionComponent } from "react";
import styles from "./InsuranceBanner.module.css";

const InsuranceBanner: FunctionComponent = () => {
  return (
    <article className={styles.frameArticle}>
      <article className={styles.frameArticle1}>
        <b className={styles.tRAVELINSURANCEB}>TRAVEL INSURANCE</b>
        <div className={styles.travelSafelyWithInsurance}>
          Travel safely with insurance.
        </div>
      </article>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameIcon}
          alt=""
          src="../frame-1000001175.svg"
        />
        <article className={styles.frameArticle2}>
          <div className={styles.medicalEmergencyHospitaliza}>
            ₹ 2,00,000 Medical Emergency (Hospitalization)
          </div>
        </article>
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameIcon}
          alt=""
          src="../frame-1000001177.svg"
        />
        <div className={styles.tripCancellationDueToIllne}>
          ₹ 20,000 Trip Cancellation due to illness
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameIcon}
          alt=""
          src="../frame-1000001174.svg"
        />
        <div className={styles.baggageLossDiv}>₹ 20,000 Baggage Loss</div>
      </div>
    </article>
  );
};

export default InsuranceBanner;
