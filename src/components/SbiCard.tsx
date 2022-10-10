import { FunctionComponent } from "react";
import styles from "./SbiCard.module.css";

const SbiCard: FunctionComponent = () => {
  return (
    <section className={styles.frameSection}>
      <div className={styles.rentACarCarddefaultlight}>
        <div className={styles.imgDiv}>
          <div className={styles.labelDiv}>
            <b className={styles.popularB}>popular</b>
          </div>
          <img className={styles.image38Icon} alt="" src="../image-38@2x.png" />
        </div>
        <div className={styles.infoDiv}>
          <div className={styles.stayInfoDiv}>
            <div className={styles.titleDiv}>
              <div className={styles.pointsBonusOnDomesticFligh}>
                500 Points bonus on Domestic Flights
              </div>
            </div>
            <div className={styles.priceDiv}>
              <b className={styles.popularB}>$300</b>
              <div className={styles.frameDiv}>
                <b className={styles.dayB}>/day</b>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv1}>
            <div className={styles.benefit01Div}>
              <img
                className={styles.iconsRouteLine}
                alt=""
                src="../iconsrouteline.svg"
              />
              <div
                className={styles.withSBICreditCardDebitC}
              >{`With SBI Credit Card & Debit Card EMI`}</div>
            </div>
            <div className={styles.frameDiv2}>
              <div className={styles.benefit02Div}>
                <img
                  className={styles.iconsUserLine}
                  alt=""
                  src="../iconsuserline.svg"
                />
                <div className={styles.supplierDiv}>1 Supplier</div>
              </div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.bottomDiv}>
            <img
              className={styles.frameIcon}
              alt=""
              src="../frame-1000001168.svg"
            />
            <div className={styles.gOSBIDiv}>GOSBI</div>
            <div className={styles.labelDiv1}>
              <b className={styles.popularB}>+ 500 POINTS</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rentACarCarddefaultlight1}>
        <div className={styles.imgDiv1}>
          <div className={styles.labelDiv}>
            <b className={styles.popularB}>popular</b>
          </div>
          <img
            className={styles.image38Icon}
            alt=""
            src="../image-381@2x.png"
          />
        </div>
        <div className={styles.infoDiv}>
          <div className={styles.stayInfoDiv}>
            <div className={styles.titleDiv}>
              <div className={styles.pointsBonusOnDomesticFligh}>
                500 Points bonus on Domestic Flights
              </div>
            </div>
            <div className={styles.priceDiv}>
              <b className={styles.popularB}>$300</b>
              <div className={styles.frameDiv}>
                <b className={styles.dayB}>/day</b>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv1}>
            <div className={styles.benefit01Div}>
              <img
                className={styles.iconsRouteLine}
                alt=""
                src="../iconsrouteline1.svg"
              />
              <div
                className={styles.withSBICreditCardDebitC}
              >{`With SBI Credit Card & Debit Card EMI`}</div>
            </div>
            <div className={styles.frameDiv2}>
              <div className={styles.benefit02Div}>
                <img
                  className={styles.iconsUserLine}
                  alt=""
                  src="../iconsuserline1.svg"
                />
                <div className={styles.supplierDiv}>1 Supplier</div>
              </div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.bottomDiv}>
            <img
              className={styles.frameIcon}
              alt=""
              src="../frame-10000011681.svg"
            />
            <div className={styles.gOSBIDiv}>GOSBI</div>
            <div className={styles.labelDiv1}>
              <b className={styles.popularB}>+ 500 POINTS</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SbiCard;
