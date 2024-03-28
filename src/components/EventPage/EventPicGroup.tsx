import { FunctionComponent } from "react";
import styles from "./EventPicGroup.module.css";

const EventPicGroup: FunctionComponent = () => {
  return (
    <div className={styles.eventpicgroup}>
      <img
        className={styles.mainimageIcon}
        loading="lazy"
        alt=""
        src="/mainimage@2x.png"
      />
      <div className={styles.smallimagegroup}>
        <img
          className={styles.branchingAgeIcon}
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <img
          className={styles.branchingAgeIcon1}
          loading="lazy"
          alt=""
          src="/rectangle-3@2x.png"
        />
      </div>
    </div>
  );
};

export default EventPicGroup;
