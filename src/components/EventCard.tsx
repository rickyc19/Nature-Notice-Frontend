import { FunctionComponent } from "react";
import styles from "./EventCard.module.css";

export type EventCardType = {
  /** Action props */
  onEventCardContainerClick?: () => void;
};

const EventCard: FunctionComponent<EventCardType> = ({
  onEventCardContainerClick,
}) => {
  return (
    <div className={styles.eventcard} onClick={onEventCardContainerClick}>
      <div className={styles.eventimage}>
        <img
          className={styles.eventCardComponents}
          alt=""
          src="/event-card-info-components@2x.png"
        />
        <div className={styles.eventsaved}>
          <img
            className={styles.eventCardComponents1}
            alt=""
            src="/event-card-info-components1.svg"
          />
        </div>
      </div>
      <div className={styles.eventdescription}>
        <div className={styles.eventtitle}>
          Wilderness Wonders: Exploring the Hidden Beauty
        </div>
        <div className={styles.eventlocdate}>
          <div className={styles.onionCreekDrive}>6814 Onion Creek Drive</div>
          <div className={styles.apr1723Parent}>
            <div className={styles.apr1723}>Apr 17-23</div>
            <div className={styles.eventDetails}>|</div>
            <div className={styles.am}>10AM</div>
          </div>
        </div>
        <div className={styles.eventprice}>
          <span className={styles.span}>{`$15 `}</span>
          <span>entry</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
