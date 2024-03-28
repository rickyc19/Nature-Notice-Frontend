import { FunctionComponent } from "react";
import FilterBar from "./FilterBar";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.borderParent}>
      <div className={styles.border}>
        <div className={styles.fill} />
      </div>
      <FilterBar />
    </div>
  );
};

export default FrameComponent;
