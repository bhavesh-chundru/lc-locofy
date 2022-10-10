import { FunctionComponent } from "react";
import styles from "./Updates.module.css";

const Updates: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.updatesDiv}>Updates</div>
      </div>
      <div className={styles.arrowsDiv}>
        <button className={styles.leftArrowButton}>
          <img
            className={styles.iconsArrowLeft2Line}
            alt=""
            src="../iconsarrow-left-2line1.svg"
          />
        </button>
        <button className={styles.rightArrowButton}>
          <img
            className={styles.iconsArrowLeft2Line}
            alt=""
            src="../iconsarrow-right-2line1.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Updates;
