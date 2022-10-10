import { FunctionComponent } from "react";
import styles from "./SearchWidget.module.css";

const SearchWidget: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <form className={styles.frameForm}>
        <section className={styles.frameSection}>
          <div className={styles.frameDiv1}>
            <img
              className={styles.iconsMapMarkerLine}
              alt=""
              src="../iconsmap-markerline.svg"
            />
            <div className={styles.frameDiv2}>
              <div className={styles.frameDiv3}>
                <b className={styles.wHERETOB}>WHERE TO?</b>
              </div>
              <div className={styles.frameDiv3}>
                <div className={styles.destinationOrPropertyName}>
                  Destination or property name
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv5}>
            <img
              className={styles.frameIcon}
              alt=""
              src="../frame-1000001216.svg"
            />
            <div className={styles.frameDiv6}>
              <div className={styles.frameDiv7}>
                <div className={styles.frameDiv8}>
                  <b className={styles.wHERETOB}>Check-in</b>
                </div>
                <div className={styles.frameDiv8}>
                  <div className={styles.dec2022Div}>12 Dec, 2022</div>
                </div>
              </div>
            </div>
            <button className={styles.labelButton}>
              <b className={styles.sAVERB}>1 Night</b>
            </button>
            <img
              className={styles.frameIcon}
              alt=""
              src="../frame-10000012161.svg"
            />
            <div className={styles.frameDiv10}>
              <div className={styles.frameDiv7}>
                <div className={styles.frameDiv8}>
                  <b className={styles.wHERETOB}>Check-out</b>
                </div>
                <div className={styles.frameDiv8}>
                  <div className={styles.dec2022Div}>13 Dec, 2022</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv14}>
            <img
              className={styles.frameIcon2}
              alt=""
              src="../frame-1000001228.svg"
            />
            <div className={styles.frameDiv15}>
              <div className={styles.frameDiv8}>
                <b className={styles.wHERETOB}>{`rooms & guests`}</b>
              </div>
              <div className={styles.frameDiv8}>
                <div className={styles.room2Adults3Children}>
                  1 Room, 2 Adults, 3 Children
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.frameSection1}>
          <div className={styles.tripSelectionDiv}>
            <b className={styles.label}>3</b>
            <img
              className={styles.antDesignstarFilledIcon}
              alt=""
              src="../antdesignstarfilled.svg"
            />
          </div>
          <div className={styles.tripSelectionDiv}>
            <b className={styles.label}>4</b>
            <img
              className={styles.antDesignstarFilledIcon}
              alt=""
              src="../antdesignstarfilled1.svg"
            />
          </div>
          <div className={styles.tripSelectionDiv2}>
            <b className={styles.label2}>5</b>
            <img
              className={styles.antDesignstarFilledIcon}
              alt=""
              src="../antdesignstarfilled2.svg"
            />
          </div>
          <button className={styles.tripSelectionButton}>
            <b className={styles.label3}>Free Cancellation</b>
          </button>
          <button className={styles.tripSelectionButton}>
            <b className={styles.label3}>Breakfast Available</b>
          </button>
        </section>
        <div className={styles.frameDiv18}>
          <div className={styles.checkboxDiv}>
            <div className={styles.rectangleDiv} />
            <img className={styles.checkIcon} alt="" src="../check.svg" />
          </div>
          <div className={styles.travellingForWork}>Travelling for Work</div>
        </div>
        <section className={styles.frameSection2}>
          <div className={styles.frameDiv19}>
            <div className={styles.frameDiv20}>
              <div className={styles.recentSearchesDiv}>Recent Searches</div>
            </div>
            <div className={styles.frameDiv21}>
              <div className={styles.frameDiv22}>
                <img
                  className={styles.frameIcon3}
                  alt=""
                  src="../frame-1000001232.svg"
                />
                <b className={styles.hotelsB}>Hotels</b>
              </div>
              <div className={styles.frameDiv23}>
                <div className={styles.chennaiDiv}>Chennai</div>
              </div>
              <div className={styles.frameDiv23}>
                <div className={styles.adultsAug04Aug05}>
                  2 Adults | Aug 04 - Aug 05
                </div>
              </div>
            </div>
            <div className={styles.frameDiv25}>
              <div className={styles.frameDiv22}>
                <img
                  className={styles.frameIcon4}
                  alt=""
                  src="../frame-1000001237.svg"
                />
                <b className={styles.hotelsB}>Flights</b>
              </div>
              <div className={styles.frameDiv27}>
                <div className={styles.chennaiDiv}>Delhi</div>
                <img
                  className={styles.frameIcon5}
                  alt=""
                  src="../frame-1000001236.svg"
                />
                <div className={styles.chennaiDiv}>Ahemedabad</div>
              </div>
              <div className={styles.frameDiv28}>
                <div className={styles.div}>28 June’ 22</div>
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.labelDiv}>{`Search `}</div>
          </button>
        </section>
      </form>
    </div>
  );
};

export default SearchWidget;
