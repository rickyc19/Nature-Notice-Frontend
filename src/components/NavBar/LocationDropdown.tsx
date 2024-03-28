import { FunctionComponent } from "react";
import styles from "./LocationDropdown.module.css";

const LocationDropdown: FunctionComponent = () => {
  return (
    <button className={styles.locationdropdown}>
      <div className={styles.addEventButton}>
        <img className={styles.mapPin11} alt="" src="/mappin-1-1.svg" />
        <div className={styles.austin}>Austin</div>
      </div>
      <img className={styles.down1Icon} alt="" src="/down-1.svg" />
    </button>
  );
};

export default LocationDropdown;
