import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./DateSelector.module.css";

const DateSelector: FunctionComponent = () => {
  return (
    <div className={styles.dateselector}>
      <div className={styles.datebuttons}>
        <Button
          className={styles.buttonany}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#20525c",
            fontSize: "13",
            background: "#fec45a",
            borderRadius: "52px",
            "&:hover": { background: "#fec45a" },
            width: 56,
          }}
        >
          Any
        </Button>
        <Button
          className={styles.buttonweekends}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#213502",
            fontSize: "13",
            borderColor: "#d9d9d9",
            borderRadius: "52px",
            "&:hover": { borderColor: "#d9d9d9" },
          }}
        >
          Weekends
        </Button>
        <Button
          className={styles.buttonweeknights}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#213502",
            fontSize: "13",
            borderColor: "#d9d9d9",
            borderRadius: "52px",
            "&:hover": { borderColor: "#d9d9d9" },
          }}
        >
          Weeknights
        </Button>
      </div>
      <div className={styles.customDateRange}>Custom Date Range</div>
    </div>
  );
};

export default DateSelector;
