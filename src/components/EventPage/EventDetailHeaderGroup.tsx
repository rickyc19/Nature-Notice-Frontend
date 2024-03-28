import { FunctionComponent } from "react";
import styles from "./EventDetailHeaderGroup.module.css";

const EventDetailHeaderGroup: FunctionComponent = () => {
  return (
    <div className={styles.eventdetailheadergroup}>
      <div className={styles.eventdetailheadergroup1}>
        <div className={styles.eventhost}>
          <img
            className={styles.hostpicIcon}
            loading="lazy"
            alt=""
            src="/hostpic@2x.png"
          />
          <div className={styles.host}>
            <div className={styles.hostedBy}>Hosted by</div>
            <h2 className={styles.jonathonSandro}>Jonathon Sandro</h2>
          </div>
        </div>
        <div className={styles.sharesavegroup}>
          <div className={styles.sharebutton}>
            <img
              className={styles.share21}
              loading="lazy"
              alt=""
              src="/share-2-1.svg"
            />
            <div className={styles.share}>Share</div>
            <img className={styles.arrowIcon} alt="" src="/arrow2@2x.png" />
            <img className={styles.arrowIcon1} alt="" src="/arrow1.svg" />
          </div>
          <div className={styles.savebutton}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <div className={styles.save}>Save</div>
            <img className={styles.arrowIcon2} alt="" src="/arrow@2x.png" />
            <img className={styles.arrowIcon3} alt="" src="/arrow3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailHeaderGroup;
