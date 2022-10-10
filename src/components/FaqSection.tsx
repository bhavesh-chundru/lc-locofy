import { FunctionComponent } from "react";
import styles from "./FaqSection.module.css";

const FaqSection: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.frameDiv1}>
        <b className={styles.lEARNHOWTOGETSTARTED}>LEARN HOW TO GET STARTED</b>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.frequentlyAskedQuestions}>
          Frequently Asked Questions
        </div>
      </div>
      <nav className={styles.nav}>
        <button className={styles.subNavItem}>
          <div className={styles.activeDiv}>General</div>
        </button>
        <button className={styles.subNavItem1}>
          <div className={styles.defaultDiv}>Transfers</div>
        </button>
        <button className={styles.subNavItem1}>
          <div className={styles.defaultDiv}>Flights</div>
        </button>
        <button className={styles.subNavItem1}>
          <div className={styles.defaultDiv}>Hotels</div>
        </button>
      </nav>
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv4}>
          <div className={styles.div}>01</div>
          <div className={styles.cancellingAFlightBooking}>
            Cancelling a flight booking
          </div>
          <img
            className={styles.iconsArrowDownSimpleLine}
            alt=""
            src="../iconsarrow-down-simpleline.svg"
          />
        </div>
        <div className={styles.frameDiv5}>
          <div className={styles.div}>01</div>
          <div className={styles.cancellingAFlightBooking}>
            Getting a refund for a cancelled flight
          </div>
          <img
            className={styles.iconsArrowDownSimpleLine}
            alt=""
            src="../iconsarrow-down-simpleline.svg"
          />
        </div>
        <div className={styles.frameDiv5}>
          <div className={styles.div}>01</div>
          <div className={styles.cancellingAFlightBooking}>
            Refund status of a cancellation
          </div>
          <img
            className={styles.iconsArrowDownSimpleLine}
            alt=""
            src="../iconsarrow-down-simpleline.svg"
          />
        </div>
        <div className={styles.frameDiv5}>
          <div className={styles.div}>01</div>
          <div className={styles.cancellingAFlightBooking}>
            Cancelling a flight booking
          </div>
          <img
            className={styles.iconsArrowDownSimpleLine}
            alt=""
            src="../iconsarrow-down-simpleline.svg"
          />
        </div>
        <div className={styles.frameDiv8}>
          <div className={styles.cancellingAFlightBookingYo}>
            Cancelling a flight booking you made on Loyalty Caravan is super
            easy. You can even check your refund amount before you decide to go
            ahead with the cancellation. Here’s how:
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
