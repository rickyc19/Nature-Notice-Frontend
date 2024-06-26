import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./ShowMoreGroup.module.css";

export type ShowMoreType = {
  onClick?: () => void;
};

const ShowMoreGroup: FunctionComponent<ShowMoreType> = ({onClick}) => {
  return (
    <div className={styles.showmoregroup}>
      <h3 className={styles.continueExploringNearest}>
        Continue exploring nearest events
      </h3>
      <div className={styles.wrapComponent}>
        <Button
          className={styles.showmorebutton}
          disableElevation={true}
          variant="contained"
          onClick={onClick}
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            background: "#213502",
            borderRadius: "5px",
            "&:hover": { background: "#213502" },
            width: 140,
            height: 46,
          }}
        >
          Show More
        </Button>
      </div>
    </div>
  );
};

export default ShowMoreGroup;
