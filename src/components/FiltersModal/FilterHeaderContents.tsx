import { FunctionComponent } from "react";
import styles from "./FilterHeaderContents.module.css";
import {FiltersType} from "./Filters";


const FilterHeaderContents: FunctionComponent<FiltersType> = ({ onClose }) => {
  return (
    <div className={styles.filterheadercontents}>
      <div className={styles.filtersList}>
        <div className={styles.filters}>Filters</div>
      </div>
      <img className={styles.exitbuttonIcon} alt="" src="/exitbutton.svg" onClick={onClose}/>
    </div>
  );
};

export default FilterHeaderContents;
