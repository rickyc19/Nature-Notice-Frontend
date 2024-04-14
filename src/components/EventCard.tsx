import { FunctionComponent } from "react";
import styles from "./EventCard.module.css";

export type EventCardType = {
  /** Action props */
  onEventCardContainerClick?: () => void;
  eventTitle?: string;
  eventLocation?: string;
  eventStartDate?: string;
  eventEndDate?: string;
  eventTime?: string;
  eventPrice: number;
  eventSaved?: boolean;
  eventDescription?: string;
  eventHost?: string;
};

const EventCard: FunctionComponent<EventCardType> = ({
  onEventCardContainerClick,
  eventTitle,
  eventLocation,
  eventStartDate,
  eventEndDate,
  eventTime,
  eventPrice,
  eventSaved,
  eventDescription,
  eventHost,
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
          {eventTitle}
        </div>
        <div className={styles.eventlocdate}>
          <div className={styles.onionCreekDrive}>{eventLocation}</div>
          <div className={styles.apr1723Parent}>
            <div className={styles.apr1723}>{eventStartDate}</div>
            <div className={styles.eventDetails}>|</div>
            <div className={styles.am}>10AM</div>
          </div>
        </div>
        <div className={styles.eventprice}>
          <span className={styles.span}>{(eventPrice > 0) ? "$" + eventPrice : "Free"} entry</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
