import { FunctionComponent } from "react";
import styles from "./UpdateResults.module.css";

const UpdateResults: FunctionComponent = () => {
  return (
    <article className={styles.stackArticle}>
      <div className={styles.includeCardDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.covidUpdatesDiv}>Covid Updates</div>
          <div className={styles.stayUpdatedWithTheLatestT}>
            Stay updated with the latest travel guidelines
          </div>
        </div>
      </div>
      <div className={styles.includeCardDiv1}>
        <div className={styles.frameDiv}>
          <div className={styles.covidUpdatesDiv}>Covid Updates</div>
          <div className={styles.stayUpdatedWithTheLatestT}>
            Stay updated with the latest travel guidelines
          </div>
        </div>
      </div>
      <div className={styles.includeCardDiv2}>
        <div className={styles.frameDiv}>
          <div className={styles.covidUpdatesDiv}>Covid Updates</div>
          <div className={styles.stayUpdatedWithTheLatestT}>
            Stay updated with the latest travel guidelines
          </div>
        </div>
      </div>
      <div className={styles.includeCardDiv1}>
        <div className={styles.frameDiv}>
          <div className={styles.covidUpdatesDiv}>Covid Updates</div>
          <div className={styles.stayUpdatedWithTheLatestT}>
            Stay updated with the latest travel guidelines
          </div>
        </div>
      </div>
    </article>
  );
};

export default UpdateResults;
