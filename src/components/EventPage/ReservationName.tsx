import { FunctionComponent } from "react";
import styles from "./ReservationName.module.css";

const ReservationName: FunctionComponent = () => {
  return (
    <div className={styles.reservationname}>
      <div className={styles.reservationname1}>
        <div className={styles.line6Parent}>
          <div className={styles.line6}>NAME</div>
          <input
            className={styles.line5}
            placeholder="Richardo Jhonson"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationName;
