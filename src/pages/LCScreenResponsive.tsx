import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import SearchWidget from "../components/SearchWidget";
import LoginBanner from "../components/LoginBanner";
import OfferAndDeals from "../components/OfferAndDeals";
import Header from "../components/Header";
import SbiCard from "../components/SbiCard";
import OffersAndDeals from "../components/OffersAndDeals";
import Updates from "../components/Updates";
import UpdateResults from "../components/UpdateResults";
import InsuranceBanner from "../components/InsuranceBanner";
import FeaturedHotels from "../components/FeaturedHotels";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import styles from "./LCScreenResponsive.module.css";

const LCScreenResponsive: FunctionComponent = () => {
  return (
    <div className={styles.lCScreenResponsive}>
      <Navbar />
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv2}>
            <div className={styles.makeYourLoyaltyCount}>
              Make your Loyalty count!
            </div>
          </div>
          <div className={styles.frameDiv3}>
            <div className={styles.getRewardedForEveryFlight}>
              Get rewarded for every flight, hotel and transfer booking.
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <button className={styles.labelButton}>See how it works</button>
        </button>
      </div>
      {/* <SearchWidget /> */}
      <LoginBanner />
      <OfferAndDeals />
      <Header />
      <SbiCard />
      <OffersAndDeals />
      <Updates />
      <UpdateResults />
      <InsuranceBanner />
      <FeaturedHotels />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default LCScreenResponsive;
