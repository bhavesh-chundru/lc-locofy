import { FunctionComponent } from "react";
import styles from "./LoginBanner.module.css";

const LoginBanner: FunctionComponent = () => {
  return (
    <section className={styles.frameSection}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.whyBookWithLoyaltyCaravan}>
            Why book with Loyalty Caravan
          </div>
        </div>
        <div className={styles.frameDiv2}>
          <div className={styles.loremIpsumDolorSitAmetCo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.L orem ipsum
            dolor sit amet.
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.labelDiv}>Login</div>
        </button>
      </div>
      <div className={styles.frameDiv3}>
        <img
          className={styles.frameIcon}
          alt=""
          src="../frame-1000001155.svg"
        />
        <div className={styles.frameDiv4}>
          <div className={styles.frameDiv5}>
            <div className={styles.x7CustomerSupport}>
              24x7 Customer Support
            </div>
          </div>
          <div className={styles.frameDiv6}>
            <div className={styles.assumSuavitateEaVelVeroE}>
              Assum suavitate ea vel, vero erat doming cu cum. Zril.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv7}>
        <div className={styles.frameDiv4}>
          <img
            className={styles.frameIcon}
            alt=""
            src="../frame-1000001162.svg"
          />
          <div className={styles.frameDiv9}>
            <div className={styles.frameDiv5}>
              <div className={styles.x7CustomerSupport}>
                24x7 Customer Support
              </div>
            </div>
            <div className={styles.frameDiv6}>
              <div className={styles.assumSuavitateEaVelVeroE}>
                Assum suavitate ea vel, vero erat doming cu cum. Zril.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv3}>
        <img
          className={styles.frameIcon}
          alt=""
          src="../frame-1000001164.svg"
        />
        <div className={styles.frameDiv4}>
          <div className={styles.frameDiv5}>
            <div className={styles.x7CustomerSupport}>
              24x7 Customer Support
            </div>
          </div>
          <div className={styles.frameDiv6}>
            <div className={styles.assumSuavitateEaVelVeroE}>
              Assum suavitate ea vel, vero erat doming cu cum. Zril.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginBanner;
