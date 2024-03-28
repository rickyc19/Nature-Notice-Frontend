import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./CostSelections.module.css";

const CostSelections: FunctionComponent = () => {
  return (
    <div className={styles.costselections}>
      <Button
        className={styles.button}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#20525c",
          fontSize: "13",
          background: "#fec45a",
          borderRadius: "52px",
          "&:hover": { background: "#fec45a" },
          width: 60,
          height: 36,
        }}
      >
        Free
      </Button>
      <div className={styles.mincost}>
        <div className={styles.text}>
          <div className={styles.minimum}>Minimum</div>
          <div className={styles.costSlider}>$10</div>
        </div>
      </div>
      <div className={styles.wrapperCostslider}>
        <img
          className={styles.costsliderIcon}
          loading="lazy"
          alt=""
          src="/costslider.svg"
        />
      </div>
      <div className={styles.maxcost}>
        <div className={styles.text1}>
          <div className={styles.maximum}>Maximum</div>
          <div className={styles.div}>$1000</div>
        </div>
      </div>
    </div>
  );
};

export default CostSelections;
