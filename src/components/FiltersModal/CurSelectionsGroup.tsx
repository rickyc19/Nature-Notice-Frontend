import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./CurSelectionsGroup.module.css";

const CurSelectionsGroup: FunctionComponent = () => {
  return (
    <div className={styles.curselectionsgroup}>
      <Button
        className={styles.button}
        endIcon={<img width="10px" height="10px" src="/androidclose.svg" />}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#20525c",
          fontSize: "13",
          borderColor: "#d9d9d9",
          borderRadius: "52px",
          "&:hover": { borderColor: "#d9d9d9" },
          width: 81,
          height: 36,
        }}
      >
        Any
      </Button>
      <Button
        className={styles.button1}
        endIcon={<img width="10px" height="10px" src="/androidclose-1.svg" />}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#20525c",
          fontSize: "13",
          borderColor: "#d9d9d9",
          borderRadius: "52px",
          "&:hover": { borderColor: "#d9d9d9" },
          height: 36,
        }}
      >
        Indoor
      </Button>
      <div className={styles.button2}>
        <div className={styles.parent}>
          <div className={styles.div}>5</div>
          <img
            className={styles.androidCloseIcon}
            loading="lazy"
            alt=""
            src="/androidclose-2.svg"
          />
        </div>
      </div>
      <Button
        className={styles.button3}
        endIcon={<img width="10px" height="10px" src="/androidclose-3.svg" />}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#20525c",
          fontSize: "13",
          borderColor: "#d9d9d9",
          borderRadius: "52px",
          "&:hover": { borderColor: "#d9d9d9" },
          width: 85,
          height: 36,
        }}
      >
        Free
      </Button>
    </div>
  );
};

export default CurSelectionsGroup;
