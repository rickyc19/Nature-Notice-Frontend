import { FunctionComponent } from "react";
import styles from "./ReservationSpots.module.css";

const ReservationSpots: FunctionComponent = () => {
  return (
    <div className={styles.reservationspots}>
      <div className={styles.reservationspots1}>
        <div className={styles.line6Wrapper}>
          <div className={styles.line6}>Number of spots to reserve</div>
        </div>
        <div className={styles.chipsParent}>
          <div className={styles.chips}>
            <img
              className={styles.capa1Icon}
              loading="lazy"
              alt=""
              src="/capa-1.svg"
            />
          </div>
          <div className={styles.chips1}>
            <div className={styles.div}>3</div>
          </div>
          <div className={styles.chips2}>
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSpots;
