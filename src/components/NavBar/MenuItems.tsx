import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./MenuItems.module.css";

const MenuItems: FunctionComponent = () => {
  return (
    <div className={styles.menuitems}>
      <div className={styles.filterBarComponent}>
        <div className={styles.createeventbutton}>
          <div className={styles.savedEventMarker}>
            <img className={styles.plus11} alt="" src="/plus-1-1.svg" />
          </div>
          <div className={styles.create}>Create</div>
        </div>
      </div>
      <Button
        className={styles.myeventsbutton}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "15",
          background: "#56a950",
          borderRadius: "5px",
          "&:hover": { background: "#56a950" },
          height: 46,
        }}
      >
        My Events
      </Button>
    </div>
  );
};

export default MenuItems;
