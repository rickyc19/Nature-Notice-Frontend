import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FilterHeaderContents from "./FilterHeaderContents";
import DateSelector from "./DateSelector";
import DistanceSelector from "./DistanceSelector";
import VenueSelector from "./VenueSelector";
import CostSelections from "./CostSelections";
import CurSelectionsGroup from "./CurSelectionsGroup";
import styles from "./Filters.module.css";

export type FiltersType = {
  onClose?: () => void;
};

const Filters: FunctionComponent<FiltersType> = ({ onClose }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filtermodal}>
        <div className={styles.filterheadercontentsParent}>
          <FilterHeaderContents onClose={onClose}/>
          <div className={styles.border}>
            <div className={styles.fill} />
          </div>
        </div>
        <div className={styles.datedistancefiltergroup}>
          <div className={styles.datefiltergroup}>
            <div className={styles.dates}>Dates</div>
            <DateSelector />
          </div>
          <div className={styles.distancefiltergroup}>
            <div className={styles.distanceInMiles}>Distance (in miles)</div>
            <DistanceSelector />
          </div>
        </div>
        <div className={styles.venuecostfiltergroup}>
          <div className={styles.venuefiltergroup}>
            <div className={styles.venueType}>Venue type</div>
            <VenueSelector />
          </div>
          <div className={styles.costfiltergroup}>
            <div className={styles.cost}>Cost</div>
            <CostSelections />
          </div>
        </div>
        <div className={styles.borderParent}>
          <div className={styles.border1}>
            <div className={styles.fill1} />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.curselectionsgroupWrapper}>
              <CurSelectionsGroup />
            </div>
            <div className={styles.androidclose}>
              <div className={styles.clearAll}>Clear All</div>
            </div>
            <Button
              className={styles.filterbutton}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#56a950",
                borderRadius: "5px",
                "&:hover": { background: "#56a950" },
                width: 201,
                height: 46,
              }}
            >
              Show 500+ events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
