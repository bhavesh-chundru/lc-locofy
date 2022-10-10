import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <img
            className={styles.image31Traced}
            alt=""
            src="../image-31-traced1.svg"
          />
          <div className={styles.flightsDiv}>Flights</div>
        </div>
      </div>
      <div className={styles.navActiveDiv}>
        <div className={styles.frameDiv2}>
          <img
            className={styles.screenshot20220629At532}
            alt=""
            src="../screenshot-20220629-at-532-1-traced1.svg"
          />
          <div className={styles.hotelsDiv}>Hotels</div>
        </div>
      </div>
      <div className={styles.frameDiv3}>
        <img
          className={styles.screenshot20220629At534}
          alt=""
          src="../screenshot-20220629-at-534-1-traced1.svg"
        />
        <div className={styles.hotelsDiv}>Transfers</div>
      </div>
      <div className={styles.packagesDiv}>Packages</div>
      <div className={styles.frameDiv3}>
        <img className={styles.groupIcon} alt="" src="../group-2071.svg" />
        <div className={styles.hotelsDiv}>Flights + Hotels</div>
      </div>
    </nav>
  );
};

export default Header;
