import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./VenueSelector.module.css";

const VenueSelector: FunctionComponent = () => {
  return (
    <div className={styles.venueselector}>
      <div className={styles.venueselections}>
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
            width: 72,
          }}
        >
          Indoor
        </Button>
        <Button
          className={styles.button1}
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
          Outdoor
        </Button>
        <Button
          className={styles.button2}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#213502",
            fontSize: "13",
            borderColor: "#d9d9d9",
            borderRadius: "52px",
            "&:hover": { borderColor: "#d9d9d9" },
            width: 71,
          }}
        >
          Online
        </Button>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default VenueSelector;
