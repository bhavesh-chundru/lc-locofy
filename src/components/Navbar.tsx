import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
  return (
    <header className={styles.navbarHeader}>
      <div className={styles.logoDiv}>
        <div className={styles.lOGODiv}>LOGO</div>
      </div>
      <div className={styles.navsDiv}>
        <div className={styles.frameDiv}>
          <button className={styles.frameButton}>
            <img
              className={styles.image31Traced}
              alt=""
              src="../image-31-traced.svg"
            />
            <div className={styles.flightsDiv}>Flights</div>
          </button>
        </div>
        <div className={styles.frameDiv1}>
          <img
            className={styles.screenshot20220629At532}
            alt=""
            src="../screenshot-20220629-at-532-1-traced.svg"
          />
          <div className={styles.hotelsDiv}>Hotels</div>
        </div>
        <div className={styles.frameDiv2}>
          <img
            className={styles.screenshot20220629At534}
            alt=""
            src="../screenshot-20220629-at-534-1-traced.svg"
          />
          <div className={styles.hotelsDiv}>Transfers</div>
        </div>
        <div className={styles.frameDiv2}>
          <img className={styles.groupIcon} alt="" src="../group-207.svg" />
          <div className={styles.hotelsDiv}>Flights + Hotels</div>
        </div>
      </div>
      <div className={styles.buttonsDiv}>
        <button className={styles.button}>
          <img
            className={styles.iconsStarFilled}
            alt=""
            src="../iconsstarfilled.svg"
          />
          <div className={styles.labelDiv}>0</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.labelDiv1}>LOGIN</div>
        </button>
        <div className={styles.notificationBell}>
          <div className={styles.statusNewDiv} />
          <img
            className={styles.iconsBellLine}
            alt=""
            src="../iconsbellline.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
