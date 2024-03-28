import { FunctionComponent } from "react";
import styles from "./DistanceSelector.module.css";

const DistanceSelector: FunctionComponent = () => {
  return (
    <div className={styles.distanceselector}>
      <div className={styles.distanceselections}>
        <div className={styles.selection2}>
          <div className={styles.or}>2</div>
        </div>
        <div className={styles.selection5}>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.selection10}>
          <div className={styles.div1}>10</div>
        </div>
        <div className={styles.selection25}>
          <div className={styles.div2}>25</div>
        </div>
        <div className={styles.selection50}>
          <div className={styles.div3}>50</div>
        </div>
      </div>
    </div>
  );
};

export default DistanceSelector;
