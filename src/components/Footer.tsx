import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.frameFooter}>
      <footer className={styles.frameFooter1}>
        <div className={styles.logoDiv}>
          <div className={styles.lOGODiv}>LOGO</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.flightsDiv}>Flights</div>
          <div className={styles.hotelsDiv}>Hotels</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.transfersDiv}>Transfers</div>
          <div className={styles.transfersDiv}>Flights + Hotels</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.transfersDiv}>About us</div>
          <div className={styles.transfersDiv}>FAQ</div>
          <div className={styles.transfersDiv}>Suport</div>
          <div className={styles.transfersDiv}>{`Refunds & Cancellation`}</div>
          <div className={styles.transfersDiv}>{`Terms & Conditions`}</div>
        </div>
        <input
          className={styles.emailInput}
          type="text"
          placeholder="Enter your email"
        />
      </footer>
      <div className={styles.bottomBarDiv}>
        <div className={styles.copyright2021UI8LLCAll}>
          Copyright © 2021 UI8 LLC. All rights reserved
        </div>
        <div className={styles.frameDiv1}>
          <img
            className={styles.iconsFacebookLine}
            alt=""
            src="../iconsfacebookline.svg"
          />
          <img
            className={styles.iconsFacebookLine}
            alt=""
            src="../iconsinstagramline.svg"
          />
          <img
            className={styles.iconsTwitterLine}
            alt=""
            src="../iconstwitterline.svg"
          />
        </div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.frameDiv3}>
          <div className={styles.popularRoutesNewDelhiToMu}>
            <p className={styles.popularRoutes}>
              <span>Popular Routes</span>
            </p>
            <p className={styles.newDelhiToMumbai}>
              <span>New Delhi to Mumbai</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Mumbai to New Delhi</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Mumbai to Bangalore</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Bangalore to Mumbai</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Chennai to Mumbai</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Mumbai to Chennai</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>New Delhi to Bangalore</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Bangalore to New Delhi</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Mumbai to Hyderabad</span>
            </p>
            <p className={styles.hyderabadToBangalore}>
              <span>Hyderabad to Bangalore</span>
            </p>
          </div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.popularHotelsHotelsInMumba}>
            <p className={styles.popularRoutes}>
              <span>Popular Hotels</span>
            </p>
            <p className={styles.newDelhiToMumbai}>
              <span>Hotels in Mumbai</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in Goa</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in New Delhi</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in Jaipur</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in Udaipur</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in Shimla</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in Manali</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in Digha</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Hotels in Bangalore</span>
            </p>
            <p className={styles.hyderabadToBangalore}>
              <span>Hotels in Mussoorie</span>
            </p>
          </div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.popularHotelsHotelsInMumba}>
            <p className={styles.popularRoutes}>
              <span>Popular Airlines</span>
            </p>
            <p className={styles.newDelhiToMumbai}>
              <span>Air India</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Indigo</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Spicejet</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Go First</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>AirAsia</span>
            </p>
            <p className={styles.popularRoutes}>
              <span>Trujet</span>
            </p>
            <p className={styles.hyderabadToBangalore}>
              <span>Vistara</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv6}>
        <div className={styles.copyright2022LoyaltyCarav}>
          Copyright © 2022 Loyalty Caravan Private Limited.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
