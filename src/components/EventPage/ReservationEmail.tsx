import { FunctionComponent } from "react";
import styles from "./ReservationEmail.module.css";

const ReservationEmail: FunctionComponent = () => {
  return (
    <div className={styles.reservationemail}>
      <div className={styles.reservationemail1}>
        <div className={styles.line6Parent}>
          <div className={styles.line6}>EMAIL</div>
          <input
            className={styles.line5}
            placeholder="username@email.com"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationEmail;
